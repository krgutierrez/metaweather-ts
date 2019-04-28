"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const http_client_1 = require("./http-client");
class AxiosHttpClient extends http_client_1.BaseHttpClient {
    constructor(config) {
        super(config);
        this._instance = axios_1.default.create(config);
    }
    setBaseURL(url) {
        this._instance.defaults.baseURL = url;
    }
    async get(url) {
        const response = await this._instance.get(url);
        return {
            data: response.data,
            status: response.status
        };
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
