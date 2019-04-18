import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';

import {BaseHttpClient, HttpClientResponse} from "./http-client";

export class AxiosHttpClient extends BaseHttpClient {

  private _instance: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    super(config);
    this._instance = axios.create(config);
  }

  setBaseURL(url: string): void {
    this._instance.defaults.baseURL = url;
  }

  async get<Data>(url: string): Promise<HttpClientResponse<Data>> {
    try {
      const response = await this._instance.get<Data>(url);
      return {
        data: response.data,
        status: response.status
      };
    } catch (err) {
      const error: AxiosError = err;
      throw {
        status: error.response.status,
        message: error.response.statusText
      }
    }
  }

}