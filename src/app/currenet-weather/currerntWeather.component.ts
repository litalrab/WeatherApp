import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import { FavoritesService } from '../favorites.service';
import * as WeatherActions from '../actions/weather.actions'
import { map } from 'rxjs/operators';


import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';

@Component({
  selector: 'app-currerntWeather',
  templateUrl: './currerntWeather.component.html',
  // styles: [`
  //   .active {
  //     border: solid 5px green;
  //   }
  // `],

  styleUrls: ['./currerntWeather.component.css'],
})
export class CurrerntWeatherComponent implements OnInit,OnChanges {

  @Input() location: Location;
  @Input() isRedirectFromFav: boolean;

  endpoint: string;
  isClicked: boolean;

  constructor(
    private store: Store<AppState>,
    private weatherService: WeatherService,
    private favoritesService: FavoritesService
  ) {
    }
  ngOnChanges(changes: SimpleChanges) {
  //   if(changes['location'].currentValue){
  //     // console.log("loc+ "+this.location,changes);
  //     this.store.dispatch(new WeatherActions.CheckIfExists(changes['location'].currentValue))  ;
  //     // this.store.select(s=>  {this.isClicked =s.isfav; console.log(s.isfav)})//.subscribe(s=> s.valueOf); ;
  //     this.store.select("location").subscribe(s=>this.isClicked =s.isfav)
  //   }
    }
    onFavoritesClick() {

      // if (!this.isClicked)
      //   this.store.dispatch(new WeatherActions.AddLocation(this.location));
      // else
      //   this.store.dispatch(new WeatherActions.RemoveLocation(this.location));
      // this.isClicked = !this.isClicked;
      // this.favoritesService.saveSessionStorage(this.isClicked);
  
    }
    ngOnInit() {

    //  this.isRedirectFromFav ? true : this.favoritesService.getSessionStorage();

  }
  // findMe() {
  //   if (navigator.geolocation) {

  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.weatherService.loadgeolocation(position).subscribe(data => {
  //         this.location = {
  //           CityName: this.weatherService.cityName,
  //           Temperature: data['GeoPosition']['Elevation'],
  //           WeatherText: ""
  //         }
  //       })},
  //       (error) => {
  //         console.log("Geolocation is not supported by this browser"+error.message);
  //         this.loadWeather();
  //           }
  //        );
  //   }
  //   else {
  //     console.log("Geolocation is not supported by this browser.");
  //     this.loadWeather();
  //   }
  // }
  // loadWeather() {
  //   this.weatherService.loadWeather("tel-aviv").subscribe(data => {
  //     this.location = {
  //       CityName: this.weatherService.cityName,
  //       Temperature: data[0]['Temperature'],
  //       WeatherText: data[0]['WeatherText']
  //     }
  //     console.log('mergeMap:', data, this.location)
  //   });

  // }




}
