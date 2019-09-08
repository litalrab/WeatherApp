import { Component,Input, OnInit } from '@angular/core';
import { weather } from '../location.model';


@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styles: [`
    .active {
      border: solid 5px green;
    }
  `],
})
export class DailyWeatherComponent  {
  @Input() dailyWeather: weather;
  constructor() {
   }

}
