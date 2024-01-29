import { InjectionToken, Provider } from "@angular/core";

export interface HttpConfig {
    baseUrl: string;
    defaultHeaders: Record<string, string>,
    withBase(url: string): string;
}

export const HTTP_CONFIG = new InjectionToken<HttpConfig>("HTTP_CONFIG");

const httpConfigFactory = (): HttpConfig => {
    const url = "https://jsonplaceholder.typicode.com/";
    return {
        baseUrl: url, defaultHeaders: {
            "Content-Type": "application/json"
        },
        withBase(url: string) {
            return this.baseUrl + url;
        }
    }
}

export const httpConfigProvider: Provider = {
    provide: HTTP_CONFIG,
    useFactory: httpConfigFactory
}
