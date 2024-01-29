export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoData;
}

export interface GeoData {
    lat: string;
    long: string;
}