
export type WeatherStateAbbreviation = 'sn' | 'sl' | 'h' | 't' | 'hr' | 'lr' | 's' | 'hc' | 'lc' | 'c';

export type WeatherStateName = 'Snow' | 'Sleet' | 'Hail' | 'Thunderstorm' | 'Heavy Rain' | 'Light Rain' | 'Showers' | 'Heavy Cloud' | 'Light Cloud' | 'Clear';

export interface WeatherState {
  name: WeatherStateName;
  abbreviation: WeatherStateAbbreviation;
  icon: string;
}