import { Action } from '@ngrx/store'
import { Location } from '../location.model'
import * as WeatherActions from '../actions/weather.actions'
import { AppState } from '../app.state';

// export interface favState{

//     favs:Location[];
//     isSelected :boolean;
//  }
// Section 1
const initialState: AppState = {
    favs	: [],
    isfav: false
}
// Section 2
export function reducer(state: AppState = initialState, action: WeatherActions.Actions) {
    console.log(action, state);
    
    // Section 3
    switch(action.type) {
        case WeatherActions.ADD_LOCATION:
            // [...state, action.payload] 
    console.log(action, state);

            return {...state,
                    favs: state.favs.concat(action.payload)
               };
      
        case WeatherActions.REMOVE_LOCATION:
                const locationIndex =  state.favs.findIndex(x=> x.currernt.CityName == action.payload.currernt.CityName);
                state.favs.splice(locationIndex, 1)
                return {...state};
        case WeatherActions.CHECLIFEXISTS_LOCATION:
                    const isexists =  state.favs.find(x=> x.currernt.CityName == action.payload.CityName);
                    // console.log(isexists);
                    const isfav= isexists ? true : false   ;
                    return {...state,isfav: isfav};
        default:
            return state;
    }
}