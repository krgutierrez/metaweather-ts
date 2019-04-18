import SimpleLocationInfo from "../simple-location-info";
import LocationInfo from "../location-info";
/**
 * Parse the response from "https://www.metaweather.com/api/location/search/?query={query}"
 * or "https://www.metaweather.com/api/location/search/?lattlong={latitude},{longitude}"
 * @param response - the response from search api of metaweather
 * @return SimpleLocationInfo[]
 */
export declare const jsonResponsetoSimpleLocationInfoList: (response?: any[]) => SimpleLocationInfo[];
/**
 * Parse the response from 'https://www.metaweather.com/api/location/{woeId}
 * @param response - the response from search location by woeid of metaweather
 * @return LocationInfo
 */
export declare const jsonResponseToLocationInfo: (response: any) => LocationInfo;
