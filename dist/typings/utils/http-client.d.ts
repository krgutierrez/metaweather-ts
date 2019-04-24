export interface HttpClientResponse<Data> {
    data?: Data;
    status: number;
}
export interface HttpClient {
    get<Data = any>(url: string): Promise<HttpClientResponse<Data>>;
}
export declare abstract class BaseHttpClient<Config = any> implements HttpClient {
    protected _config: Config;
    protected constructor(config?: Config);
    abstract setBaseURL(url: string): void;
    abstract get<Data = any>(url: string): Promise<HttpClientResponse<Data>>;
}
