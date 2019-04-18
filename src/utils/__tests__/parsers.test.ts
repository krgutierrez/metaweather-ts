import { jsonResponsetoSimpleLocationInfoList, jsonResponseToLocationInfo } from '../parsers';
import * as searchMockData from './search-query.mock.json';
import * as searchByWoeidMockData from './search-by-woeid.mock.json';

describe("When jsonResponsetoSimpleLocationInfoList is used", () => {

  describe("When no parameter passed", () => {
    it ('Should expect result to be a blank array', () => {
      expect(jsonResponsetoSimpleLocationInfoList()).toEqual([]);
    });
  });

  describe("When parameter passed is undefined", () => {
    it ('Should expect result to be a blank array', () => {
      expect(jsonResponsetoSimpleLocationInfoList(undefined)).toEqual([]);
    });
  });

  describe('When response passed is null or undefined', function () {

    it('Should expect an error exception', () => {
      expect(() => jsonResponsetoSimpleLocationInfoList(null)).toThrow();
    });

  });

  describe("When valid data are passed", () => {

    const locations = jsonResponsetoSimpleLocationInfoList(searchMockData);

    it('Should expect result to be an array', () => {
      expect(locations instanceof Array).toBeTruthy();
    });

    it('Should expect result item to have the ShortLocationInfo attributes', () => {
      const item = locations[0];
      expect(item).toHaveProperty('title');
      expect(item).toHaveProperty('locationType');
      expect(item).toHaveProperty('woeId');
      expect(item).toHaveProperty('latitude');
      expect(item).toHaveProperty('longitude');
    });

  });

});

describe("When jsonResponseToLocationInfo is used", () => {

  describe("When no parameter passed", () => {
    it ('Should expect error to be thrown', () => {
      // @ts-ignore
      expect(() => jsonResponseToLocationInfo()).toThrow();
    });
  });

  describe("When parameter passed is undefined", () => {
    it ('Should expect error to be thrown', () => {
      expect(() => jsonResponseToLocationInfo(undefined)).toThrow();
    });
  });

  describe('When response passed is null or undefined', function () {

    it ('Should expect error to be thrown', () => {
      expect(() => jsonResponseToLocationInfo(null)).toThrow();
    });

  });

  describe("When valid data are passed", () => {

    const locationInfo = jsonResponseToLocationInfo(searchByWoeidMockData);

    it('Should expect result to be a object', () => {
      expect(locationInfo instanceof Object).toBeTruthy();
    });

    it('Should expect result item to have the LocationInfo attributes', () => {
      expect(locationInfo).toHaveProperty('title');
      expect(locationInfo).toHaveProperty('locationType');
      expect(locationInfo).toHaveProperty('woeId');
      expect(locationInfo).toHaveProperty('latitude');
      expect(locationInfo).toHaveProperty('longitude');
      expect(locationInfo).toHaveProperty('sunRise');
      expect(locationInfo).toHaveProperty('sunSet');
      expect(locationInfo).toHaveProperty('timezoneName');
      expect(locationInfo).toHaveProperty('parent');
      expect(locationInfo).toHaveProperty('sources');
      expect(locationInfo).toHaveProperty('consolidatedWeather');
    });

    it('Should expect location parent to have the CommonLocationInfo attributes', () => {
      expect(locationInfo.parent).toHaveProperty('title');
      expect(locationInfo.parent).toHaveProperty('locationType');
      expect(locationInfo.parent).toHaveProperty('woeId');
      expect(locationInfo.parent).toHaveProperty('latitude');
      expect(locationInfo.parent).toHaveProperty('longitude');
    });

    it('Should expect sources to be an array', () => {
      expect(locationInfo.sources).toBeInstanceOf(Array);
    });

    it('Should expect location source to have the Source attributes', () => {
      const source = locationInfo.sources[0];
      expect(source).toHaveProperty('title');
      expect(source).toHaveProperty('url');
      expect(source).toHaveProperty('slug');
      expect(source).toHaveProperty('crawlRate');
    });

    it('Should expect consolidatedWeather to be an array', () => {
      expect(locationInfo.consolidatedWeather).toBeInstanceOf(Array);
    });

    it('Should expect location consolidatedWeather to have the ConsolidatedWeather attributes', () => {
      const source = locationInfo.consolidatedWeather[0];
      expect(source).toHaveProperty('id');
      expect(source).toHaveProperty('applicableDate');
      expect(source).toHaveProperty('weatherStateName');
      expect(source).toHaveProperty('weatherStateAbbr');
      expect(source).toHaveProperty('windSpeed');
      expect(source).toHaveProperty('windDirection');
      expect(source).toHaveProperty('windDirectionCompass');
      expect(source).toHaveProperty('minTemp');
      expect(source).toHaveProperty('theTemp');
      expect(source).toHaveProperty('maxTemp');
      expect(source).toHaveProperty('airPressure');
      expect(source).toHaveProperty('humidity');
      expect(source).toHaveProperty('visibility');
      expect(source).toHaveProperty('predictability');
    });


  });

});