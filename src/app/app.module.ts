import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CurrerntWeatherComponent } from './currenet-weather/currerntWeather.component';
import { HeaderComponent } from './header/header.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { AppRoutingModule } from './app-routing.module';
import { WeatherComponent } from './weather/weather.component';
import { NavigateComponent } from './navigate/navigate.component';
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { DailyWeatherComponent } from './daily-weather/daily-weather.component';
import { AppHttpInterceptor } from './http.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/location.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CurrerntWeatherComponent,
    HeaderComponent,
    FavoritesComponent,
    WeatherComponent,
    NavigateComponent,
    DailyWeatherComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule, 
    BrowserAnimationsModule, // required animations module
    StoreModule.forRoot({
      location: reducer
    }),
    ToastrModule.forRoot({
          timeOut: 5000,
      positionClass: 'toast-up-right',

      preventDuplicates: true,
      maxOpened: 1
 })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
