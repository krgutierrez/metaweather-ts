import {BaseHttpClient, HttpClient} from "./utils/http-client";
import {AxiosHttpClient} from "./utils/axios-http-client";
import SimpleLocationInfo from "./simple-location-info";
import LocationInfo from "./location-info";
import {jsonResponseToLocationInfo, jsonResponsetoSimpleLocationInfoList} from "./utils/parsers";

interface MetaWeatherApiConfig {
  httpClient: BaseHttpClient;
}

type CallBack<Data> = (err: Error, data?: Data) => void;

export default class MetaWeatherApi {

  private _httpClient: BaseHttpClient;

  constructor(config?: MetaWeatherApiConfig) {
    if (config && config.httpClient) {
      this._httpClient = config.httpClient;
    } else {
      this._httpClient = new AxiosHttpClient();
    }
    this._httpClient.setBaseURL('https://www.metaweather.com/api');
  }

   async searchLocations(text: string): Promise<SimpleLocationInfo[]> {
     const response = await this._httpClient.get<SimpleLocationInfo[]>(`/location/search/?query=${text}`);
     return jsonResponsetoSimpleLocationInfoList(response.data);
  }

  async searchLocationByLattLong(latitude: number, longitude: number): Promise<SimpleLocationInfo[]> {
    const response = await this._httpClient.get(`/location/search/?lattlong=${latitude},${longitude}`);
    return  jsonResponsetoSimpleLocationInfoList(response.data);
  }

  async searchLocationByWoeId(woeId: number): Promise<LocationInfo>{
    const response = await this._httpClient.get<LocationInfo>(`/location/${woeId}`);
    return jsonResponseToLocationInfo(response.data);
  }

}