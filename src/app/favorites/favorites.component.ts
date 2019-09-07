import { Component, OnInit } from '@angular/core';
import { Location } from '../location.model';
import { FavoritesService } from '../favorites.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites:  Observable<Location[]>;
  isMenuOpen: boolean;
  
  constructor(private store: Store<AppState>,
    private favoritesService:FavoritesService
  ) {
    this.isMenuOpen = false;
   this.store.select("location").subscribe(s=>this.favorites=s.favs);

   }

   ngOnInit() {
   }

  toggleFavorites() {
    
    this.isMenuOpen = !this.isMenuOpen;
  }

}
