import MetaWeatherApi from "./meta-weather-api";

const metaWeatherApi = new MetaWeatherApi();

export * from "./meta-weather-api";
export * from "./utils/meta-weather-utils";
export const searchLocations = metaWeatherApi.searchLocations;
export const searchLocationByLattLong = metaWeatherApi.searchLocationByLattLong;
export const searchLocationByWoeId = metaWeatherApi.searchLocationByWoeId;


export default metaWeatherApi;