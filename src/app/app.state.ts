import { Location ,weather} from './location.model';

export interface AppState {
  readonly favs: favState[];
  readonly isfav: boolean;

}


export interface favState{

  currernt:Location;
  nextDays :weather[];
}