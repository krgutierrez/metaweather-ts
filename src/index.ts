import ClsMetaWeatherApi from "./meta-weather-api";

const metaWeatherApi = new ClsMetaWeatherApi();

export * from "./meta-weather-api";
export * from "./utils/meta-weather-utils";
export { BaseHttpClient } from './utils/http-client';

export const MetaWeatherApi = ClsMetaWeatherApi;

export const searchLocations = metaWeatherApi.searchLocations;
export const searchLocationByLattLong = metaWeatherApi.searchLocationByLattLong;
export const searchLocationByWoeId = metaWeatherApi.searchLocationByWoeId;


export default metaWeatherApi;