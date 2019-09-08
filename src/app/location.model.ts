export interface Location {
    CityName: string;
    WeatherText	: string;
    WeatherIcon:number;
    Temperature: {
    Metric:{
        Value:number;
        Unit: string;

    }
    };
}

export interface weather {
    // LocalizedName: string;
    day	: string;
    Temperature: {
        Minimum:{
            Value:number;
            Unit: string;

        }
        
    };
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