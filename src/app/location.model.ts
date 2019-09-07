export interface Location {
    CityName: string;
    WeatherText	: string;
    WeatherIcon:number;
    Temperature: object;
}

export interface weather {
    // LocalizedName: string;
    day	: string;
    Temperature: object;
    icon : string;  
    desc : string;
}

// export interface userBottunState{

//    isSelected :number;
// }

// export interface favState{

//     favs:Location[];
//     isSelected :userBottunState;
//  }