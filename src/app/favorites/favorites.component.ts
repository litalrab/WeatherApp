import { Component } from '@angular/core';
import { Location } from '../location.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: Observable<Location[]>;
  isMenuOpen: boolean;

  constructor(private store: Store<AppState>
  ) {
    this.isMenuOpen = false;
    this.store.select("location").subscribe(s => this.favorites = s.favs);

  }

  toggleFavorites() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
