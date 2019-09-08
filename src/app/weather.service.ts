import { Injectable } from '@angular/core';
import { geoposition, AutocompleteUrl, CurrentlocationeUrl, FiveDayseUrl, QueryURL } from './endpoints';
import { Location, weather } from './location.model';
import { HttpClient } from '@angular/common/http';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  autocompleteUrl: string;
  queryURL: string;
  cityName: any;
  locationKey: any;

  constructor(private http: HttpClient) {
    this.autocompleteUrl = AutocompleteUrl;
    this.queryURL = QueryURL;
  }

  loadgeolocation(position):  Observable<any> {
    let  currentLat = position.coords.latitude;
    let currentLong = position.coords.longitude;

    const url = `${geoposition}${QueryURL}&q=${currentLat},${currentLong}`;
    return this.http.get(url).pipe(

      map((data: any) => {
        this.cityName = data["LocalizedName"];
        this.locationKey = data["Key"];
        return data;
      })
    );
    // return fetch(url).then(function(response) {
    //   this.cityName = response["LocalizedName"];
    //   this.locationKey = response["Key"];
    //     return response.json();
    //   });
  }

  loadFiveDays(locationKey): Promise<weather> {

    const url = `${FiveDayseUrl}${locationKey}${QueryURL}&metric=true`;
    return fetch(url).then(response => response.json());
  }
  
  loadCurrWeather(locationKey): Observable<any>  {

    return this.http.get(`${CurrentlocationeUrl}${locationKey}${QueryURL}`).pipe(
      map((data: any) => {

        return data;
      })
    );
  }

  loadWeather(search: string): Observable<any> {
    const searchurl = `${this.autocompleteUrl}${this.queryURL}&q=${search}`;   
   return this.http.get(searchurl);

  }
}
