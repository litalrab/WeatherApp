import { Injectable } from '@angular/core';
import { Location } from './location.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Location[];
  storageName:string;

  constructor() {
    this.favorites = [];
    this.storageName="fav";
  }

  toggleFavorite(location: Location) {
    if (this.favorites.includes(location)){
      const locationIndex = this.favorites.indexOf(location);
      this.favorites.splice(locationIndex, 1);
    }
    else {
      this.favorites.push(location);
    }
  }

  get _favorites(): Location[] {
    return this.favorites;
  }
  saveSessionStorage(isSelected:boolean)
  {
     sessionStorage.setItem('isSelected',JSON.stringify(isSelected) ) ;
  }
  
  getSessionStorage():boolean
  {
    return JSON.parse(sessionStorage.getItem('isSelected'))  || false 

  }
}
