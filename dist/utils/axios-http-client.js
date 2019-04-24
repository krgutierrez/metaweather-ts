import axios from 'axios';
import { BaseHttpClient } from "./http-client";
export class AxiosHttpClient extends BaseHttpClient {
    constructor(config) {
        super(config);
        this._instance = axios.create(config);
    }
    setBaseURL(url) {
        this._instance.defaults.baseURL = url;
    }
    async get(url) {
        try {
            const response = await this._instance.get(url);
            return {
                data: response.data,
                status: response.status
            };
        }
        catch (err) {
            const error = err;
            throw {
                status: error.response.status,
                message: error.response.statusText
            };
        }
    }
}
