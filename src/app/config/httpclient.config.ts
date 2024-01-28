import { InjectionToken, Provider } from "@angular/core";

interface HttpConfig {
    baseUrl: string;
    defaultHeaders: Record<string, string>,
}

const BASE_URL = new InjectionToken<HttpConfig>("HTTP_CONFIG");

const httpConfigFactory = (): HttpConfig => {
    const url = "https://typicode.com";
    return {
        baseUrl: url, defaultHeaders: {
            "Content-Type": "application/json"
        }
    }
}

export const httpConfig: Provider = {
    provide: BASE_URL,
    useFactory: httpConfigFactory
}
