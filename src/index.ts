import MetaWeatherApi from "./meta-weather-api";

export * from "./meta-weather-api";
export * from "./utils/meta-weather-utils";

export const metaWeatherApi = new MetaWeatherApi();

export default metaWeatherApi;