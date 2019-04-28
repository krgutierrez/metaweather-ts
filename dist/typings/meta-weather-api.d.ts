import { BaseHttpClient } from "./utils/http-client";
import SimpleLocationInfo from "./simple-location-info";
import LocationInfo from "./location-info";
interface MetaWeatherApiConfig {
    httpClient: BaseHttpClient;
}
export default class MetaWeatherApi {
    private _httpClient;
    constructor(config?: MetaWeatherApiConfig);
    searchLocations: (text: string) => Promise<SimpleLocationInfo[]>;
    searchLocationByLattLong: (latitude: number, longitude: number) => Promise<SimpleLocationInfo[]>;
    searchLocationByWoeId: (woeId: number) => Promise<LocationInfo>;
}
export {};
