import CommonLocationInfo from "./common-location-info";

type WindDirectionCompass =
  'N' | 'NbE' | 'BBE' | 'NEbN' | 'NE' | 'NEbE' | 'ENE' | 'EbN' | 'E' | 'EbS' |
  'ESE' | 'SEbE' | 'SE' | 'SEbS' | 'SSE' | 'SbE' | 'S' | 'SbW' | 'SSW' | 'SWbS' |
  'SW' | 'SWbW' | 'WSW' | 'WbS' | 'W' | 'WbN' | 'WNW' | 'NWbW' | 'NW' | 'NWbN' |
  'NbW' | 'N';

type WeatherStateAbbreviation = 'sn' | 'sl' | 'h' | 't' | 'hr' | 'lr' | 's' | 'hc' | 'lc' | 'c';

export interface Source {
  title: string;
  url: string;
  slug: string;
  crawlRate: number;
}

export interface ConsolidatedWeather {
  id: number;
  applicableDate: Date;
  weatherStateName: string;
  weatherStateAbbr: WeatherStateAbbreviation;
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: WindDirectionCompass;
  minTemp: number;
  maxTemp: number;
  theTemp: number;
  airPressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
}

export default interface LocationInfo extends CommonLocationInfo {
  sunRise: Date;
  sunSet: Date;
  timezoneName: string;
  parent: CommonLocationInfo;
  sources: Source[];
  consolidatedWeather: ConsolidatedWeather[];
}