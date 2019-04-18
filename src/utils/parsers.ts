import SimpleLocationInfo from "../simple-location-info";
import {LatitudeLongitude} from "../common-location-info";
import LocationInfo, {ConsolidatedWeather, Source} from "../location-info";

const parseLatLongString = (lattLong: string): LatitudeLongitude => {
  const [ latitude, longitude ] = lattLong.split(',');
  return {
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude)
  }
};

/**
 * Parse the response from "https://www.metaweather.com/api/location/search/?query={query}"
 * or "https://www.metaweather.com/api/location/search/?lattlong={latitude},{longitude}"
 * @param response - the response from search api of metaweather
 * @return SimpleLocationInfo[]
 */
export const jsonResponsetoSimpleLocationInfoList = (response: any[] = []): SimpleLocationInfo[] => {
  return response.map<SimpleLocationInfo>(item => jsonResponseToSimpleLocationInfo(item));
};

const jsonResponseToSimpleLocationInfo = (response: any): SimpleLocationInfo => {
  const { longitude, latitude } = parseLatLongString(response.latt_long);
  return {
    woeId: response.woeid,
    distance: response.distance,
    locationType: response.location_type,
    title: response.title,
    latitude,
    longitude,
  }
};

/**
 * Parse the response from 'https://www.metaweather.com/api/location/{woeId}
 * @param response - the response from search location by woeid of metaweather
 * @return LocationInfo
 */
export const jsonResponseToLocationInfo = (response: any): LocationInfo => {
  const { distance, ...simpleLocationInfo } = jsonResponseToSimpleLocationInfo(response);
  return {
    ...simpleLocationInfo,
    sunRise: response.sun_rise,
    sunSet: response.sun_set,
    timezoneName: response.timezone_name,
    parent: jsonResponseToSimpleLocationInfo(response.parent),
    sources: jsonSourceToSources(response.sources),
    consolidatedWeather: jsonConsolidatedWeatherToConsolidatedWeather(response.consolidated_weather)
  }
};

const jsonConsolidatedWeatherToConsolidatedWeather = (consolidatedWeather: any[] = []): ConsolidatedWeather[] => {
  return consolidatedWeather.map<ConsolidatedWeather>(item => ({
    id: item.id,
    applicableDate: item.applicable_date,
    weatherStateAbbr: item.weather_state_abbr,
    weatherStateName: item.weather_state_name,
    maxTemp: item.max_temp,
    theTemp: item.the_temp,
    minTemp: item.min_temp,
    humidity: item.humidity,
    airPressure: item.air_pressure,
    predictability: item.predictability,
    visibility: item.visibility,
    windDirection: item.wind_direction,
    windDirectionCompass: item.wind_direction_compass,
    windSpeed: item.wind_speed
  }));
};

const jsonSourceToSources = (sources: any[] = []): Source[] => {
  return sources.map<Source>(item => {
    const { crawl_rate, ...attributes } = item;
    return {
      ...attributes,
      crawlRate: crawl_rate
    }
  });
};