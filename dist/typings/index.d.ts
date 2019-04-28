import MetaWeatherApi from "./meta-weather-api";
declare const metaWeatherApi: MetaWeatherApi;
export * from "./meta-weather-api";
export * from "./utils/meta-weather-utils";
export declare const searchLocations: (text: string) => Promise<import("./simple-location-info").default[]>;
export declare const searchLocationByLattLong: (latitude: number, longitude: number) => Promise<import("./simple-location-info").default[]>;
export declare const searchLocationByWoeId: (woeId: number) => Promise<import("./location-info").default>;
export default metaWeatherApi;
