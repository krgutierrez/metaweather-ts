import CommonLocationInfo from "./common-location-info";

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
  weatherStateAbbr: string;
  windSpeed: number;
  windDirection: number;
  windDirectionCompass: number;
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