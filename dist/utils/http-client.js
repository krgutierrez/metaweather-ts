"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseHttpClient {
    constructor(config) {
        this._config = config;
    }
    get config() {
        return this._config;
    }
}
exports.BaseHttpClient = BaseHttpClient;
