"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_http_client_1 = require("./utils/axios-http-client");
const parsers_1 = require("./utils/parsers");
class MetaWeatherApi {
    constructor(config) {
        this.searchLocations = async (text) => {
            const response = await this._httpClient.get(`/location/search/?query=${text}`);
            return parsers_1.jsonResponsetoSimpleLocationInfoList(response.data);
        };
        this.searchLocationByLattLong = async (latitude, longitude) => {
            const response = await this._httpClient.get(`/location/search/?lattlong=${latitude},${longitude}`);
            return parsers_1.jsonResponsetoSimpleLocationInfoList(response.data);
        };
        this.searchLocationByWoeId = async (woeId) => {
            const response = await this._httpClient.get(`/location/${woeId}`);
            return parsers_1.jsonResponseToLocationInfo(response.data);
        };
        if (config && config.httpClient) {
            this._httpClient = config.httpClient;
        }
        else {
            this._httpClient = new axios_http_client_1.AxiosHttpClient();
        }
        this._httpClient.setBaseURL('https://www.metaweather.com/api');
    }
}
exports.default = MetaWeatherApi;
