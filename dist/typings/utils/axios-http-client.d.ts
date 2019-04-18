import { AxiosRequestConfig } from 'axios';
import { BaseHttpClient, HttpClientResponse } from "./http-client";
export declare class AxiosHttpClient extends BaseHttpClient {
    private _instance;
    constructor(config?: AxiosRequestConfig);
    setBaseURL(url: string): void;
    get<Data>(url: string): Promise<HttpClientResponse<Data>>;
}
