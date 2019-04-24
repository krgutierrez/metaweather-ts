import { AxiosHttpClient } from "./utils/axios-http-client";
import { jsonResponseToLocationInfo, jsonResponsetoSimpleLocationInfoList } from "./utils/parsers";
export default class MetaWeatherApi {
    constructor(config) {
        if (config && config.httpClient) {
            this._httpClient = config.httpClient;
        }
        else {
            this._httpClient = new AxiosHttpClient();
        }
        this._httpClient.setBaseURL('https://www.metaweather.com/api');
    }
    async searchLocations(text) {
        const response = await this._httpClient.get(`/location/search/?query=${text}`);
        return jsonResponsetoSimpleLocationInfoList(response.data);
    }
    async searchLocationByLattLong(latitude, longitude) {
        const response = await this._httpClient.get(`/location/search/?lattlong=${latitude},${longitude}`);
        return jsonResponsetoSimpleLocationInfoList(response.data);
    }
    async searchLocationByWoeId(woeId) {
        const response = await this._httpClient.get(`/location/${woeId}`);
        return jsonResponseToLocationInfo(response.data);
    }
}
