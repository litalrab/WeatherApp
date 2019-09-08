import { Component, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Location, weather } from '../location.model';
import { ActivatedRoute, Router } from '@angular/router';
import * as WeatherActions from '../actions/weather.actions'
import { favState, AppState } from '../app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnChanges {

  fiveDaysWeather: weather[];
  currentLocation: Location;
  search: string;
  isRedirectFromFav: boolean;
  isClicked: boolean;
  favorites: any;
  DEFULT_CITY: string;
  
  constructor(
    private weatherService: WeatherService, private activatedRoute: ActivatedRoute,  private store: Store<AppState>,

  ) {
    this.search = "";
    this.DEFULT_CITY="tel-aviv";
    this.initDefaultValues();
  }


  ngOnChanges(changes: SimpleChanges) {
  //   console.log("loc+ "+changes);

  //   if(changes['location'].currentValue){
  //     console.log("loc+ "+changes);
  //     this.store.dispatch(new WeatherActions.CheckIfExists(changes['location'].currentValue))  ;
  //     // this.store.select(s=>  {this.isClicked =s.isfav; console.log(s.isfav)})//.subscribe(s=> s.valueOf); ;
  //     this.store.select("location").subscribe(s=>this.isClicked =s.isfav)
  //   }
    }
  initDefaultValues() {
    if (!this.currentLocation) {
      console.log(this.activatedRoute.snapshot.params.cityname);
      this.activatedRoute.snapshot.params.cityname ? this.loadFromState(this.activatedRoute.snapshot.params.cityname) : this.findMe();

    }

  }
  loadFromState(cityname) {
    this.store.select("location").subscribe(s => {
      this.currentLocation = s.favs.find(x => x.currernt.CityName == cityname).currernt;
      this.fiveDaysWeather = s.favs.find(x => x.currernt.CityName == cityname).nextDays;
      this.isClicked= true;
    }).unsubscribe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.weatherService.loadgeolocation(position).subscribe(data => {
          let locationKey = data["Key"];
          this.currentLocation = {
            CityName: this.weatherService.cityName,
            Temperature: data['GeoPosition']['Elevation'],
            WeatherText: "",
            WeatherIcon: 0
          }
          this.loadFiveDays(locationKey);
        })
      },
        (error) => {
          console.log("Geolocation is not supported by this browser" + error.message);
          this.loadWeather(this.DEFULT_CITY);
        }
      );
    }
    else {
      console.log("Geolocation is not supported by this browser.");
      this.loadWeather(this.DEFULT_CITY);
    }
  }

  loadFiveDays(locationKey: string) {
    this.fiveDaysWeather = [];

    this.weatherService.loadFiveDays(locationKey)
      .then(data => this.setfiveDaysWeather(data["DailyForecasts"]))
      .catch(err => console.log(err));
  }

  searchMovie(e: Event, input: HTMLInputElement) {
    e.preventDefault();
    this.initDefaultValues();
    this.search = input.value == "" ? this.DEFULT_CITY : input.value;
    this.loadWeather(this.search);
    this.search = "";
  }

  loadWeather(cityName) {
    this.weatherService.loadWeather(cityName).subscribe(data => {
      let cityName = data[0]["LocalizedName"];

      let locationKey = data[0]["Key"];
      this.loadFiveDays(locationKey);

      this.weatherService.loadCurrWeather(locationKey).subscribe(data => {
        this.setCurrentLocation(data[0], cityName)

        this.store.dispatch(new WeatherActions.CheckIfExists(this.currentLocation));
        this.store.select("location").subscribe(s => this.isClicked = s.isfav)

      })
    });
  }

  setCurrentLocation(currentLocation, cityName) {
    this.currentLocation = {
      CityName: cityName,
      WeatherIcon: currentLocation['WeatherIcon'],
      Temperature: currentLocation['Temperature'],
      WeatherText: currentLocation['WeatherText']
    };
  }

  getweekday(date: string): string {
    return new Date(date).toLocaleString('en-us', { weekday: 'long' });
  }

  setfiveDaysWeather(data: object) {
    var day;
    for (let detail in data) {
      day = {
        Temperature: data[detail]['Temperature'],
        day: this.getweekday(data[detail]['Date']),
        icon: data[detail]['Day']['Icon'],
        desc: data[detail]['Day']['IconPhrase']
      };
      this.fiveDaysWeather.push(day)
    }
  }

  onFavoritesClick() {

    const stateObj: favState = {
      currernt: this.currentLocation,
      nextDays: this.fiveDaysWeather
    }
    if (!this.isClicked)
      this.store.dispatch(new WeatherActions.AddLocation(stateObj));
    else
      this.store.dispatch(new WeatherActions.RemoveLocation(stateObj));
    this.isClicked = !this.isClicked;
    // this.favoritesService.saveSessionStorage(this.isClicked);

  }

}
