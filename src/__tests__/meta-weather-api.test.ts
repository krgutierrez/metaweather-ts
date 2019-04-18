import MetaWeatherApi from "../meta-weather-api";

describe('When http client is used', () => {

  const metaWeatherApi: MetaWeatherApi = new MetaWeatherApi();

  describe('When searching for "san"',  () => {

    it('Should expect a list of locations', async () => {
      const response = await metaWeatherApi.searchLocations('san');
      expect(response).not.toBeNull();
      expect(response).not.toBeUndefined();
      expect(response).not.toBe([]);
      expect(response).toBeInstanceOf(Array);
    });

  });

  describe('When searching by latitude and longitude',  () => {

    it('Should expect a list of locations', async () => {
      const response = await metaWeatherApi.searchLocationByLattLong(36.96,-122.02);
      expect(response).not.toBeNull();
      expect(response).not.toBeUndefined();
      expect(response).not.toBe([]);
      expect(response).toBeInstanceOf(Array);
    });

  });

  describe('When searching location by woeId 44418 ', () => {

    it('Should expect a LocationInfo data', async () => {
      const response = await metaWeatherApi.searchLocationByWoeId(44418);
      expect(response).not.toBeNull();
      expect(response).not.toBeUndefined();
      expect(response).not.toBe([]);
      expect(response).toBeInstanceOf(Object);
      expect(response.title).toBe('London');
    });

  })

});