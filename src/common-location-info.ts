
export interface LatitudeLongitude {
  latitude: number;
  longitude: number;
}

export default interface CommonLocationInfo extends LatitudeLongitude {
  title: string;
  locationType: string;
  woeId: number;
}