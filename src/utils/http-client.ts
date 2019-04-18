
export interface HttpClientResponse<Data> {
  data?: Data;
  status: number;
}

export interface HttpClient {

  get<Data = any>(url: string): Promise<HttpClientResponse<Data>>;

}

export abstract class BaseHttpClient<Config = any> implements HttpClient {

  protected _config: Config;

  protected constructor(config?: Config) {
    this._config = config;
  }

  abstract setBaseURL(url: string): void;

  abstract get<Data = any>(url: string): Promise<HttpClientResponse<Data>>;

}