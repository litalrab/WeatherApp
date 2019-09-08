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
