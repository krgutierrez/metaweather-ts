import { WeatherState, WeatherStateAbbreviation } from "../weather-state";
export declare type IconType = 'svg' | 'ico' | 'png-small' | 'png-large';
export declare const getWeatherStateByAbbr: (abbr: WeatherStateAbbreviation, imageType?: IconType) => WeatherState;
export declare const getIconUrl: (weatherStateAbbreviation: WeatherStateAbbreviation, imageType: IconType) => string;
