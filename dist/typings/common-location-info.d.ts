declare type LocationType = 'City' | 'Region' | 'State' | 'Province' | 'Country' | 'Continent';
export interface LatitudeLongitude {
    latitude: number;
    longitude: number;
}
export default interface CommonLocationInfo extends LatitudeLongitude {
    title: string;
    locationType: LocationType;
    woeId: number;
}
export {};
