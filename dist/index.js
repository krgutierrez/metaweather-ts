"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const meta_weather_api_1 = require("./meta-weather-api");
const metaWeatherApi = new meta_weather_api_1.default();
__export(require("./meta-weather-api"));
__export(require("./utils/meta-weather-utils"));
exports.searchLocations = metaWeatherApi.searchLocations;
exports.searchLocationByLattLong = metaWeatherApi.searchLocationByLattLong;
exports.searchLocationByWoeId = metaWeatherApi.searchLocationByWoeId;
exports.default = metaWeatherApi;
