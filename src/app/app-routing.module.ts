import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites/favorites.component';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: '', component: WeatherComponent, pathMatch: 'full' },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'weather/:cityname', component: WeatherComponent },


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    // CommonModule
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
