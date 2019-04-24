import {getIconUrl, getWeatherStateByAbbr, IconType} from "../meta-weather-utils";
import {WeatherStateAbbreviation} from "../../weather-state";

describe('When getWeatherStateByAbbr is used', () => {
  
  const abbreviationList: WeatherStateAbbreviation[] = ['sn', 'sl', 'h', 't', 'hr', 'lr', 's', 'hc', 'lc', 'c'];

  abbreviationList.forEach((abbr) => {
    describe(`When abbr is ${abbr}`, () => {
      let name = null;
      switch (abbr) {
        case "sn":
          name = "Snow"; break;
        case "sl":
          name = "Sleet"; break;
        case "h":
          name = "Hail"; break;
        case "t":
          name = "Thunderstorm"; break;
        case "hr":
          name = "Heavy Rain"; break;
        case "lr":
          name = "Light Rain"; break;
        case "s":
          name = "Showers"; break;
        case "hc":
          name = "Heavy Cloud"; break;
        case "lc":
          name = "Light Cloud"; break;
        case "c":
          name = "Clear"; break;
      }
      it(`Should expect weather state name to be ${name} and abbreviation is ${abbr}`, () => {
        const weatherState = getWeatherStateByAbbr(abbr);
        expect(weatherState.name).toBe(name);
        expect(weatherState.abbreviation).toBe(abbr);
        expect(weatherState.icon).toBe(`/static/img/weather/${abbr}.svg`)
      })
    });
  });

});

describe('When getIconPath is used', () => {

  const iconTypeList: IconType[] = ['ico', 'png-large', "png-small", "svg", null, undefined];

  iconTypeList.forEach(type => {
    describe(`When iconType is ${type}`, () => {
      let abbr: WeatherStateAbbreviation = 's';
      const iconPath = getIconUrl(abbr, type);
      let expectedOutPut = null;
      switch (type) {
        case "ico":
          expectedOutPut = `/static/img/weather/ico/${abbr}.ico`;
          break;
        case "png-large":
          expectedOutPut = `/static/img/weather/png/${abbr}.png`;
          break;
        case "png-small":
          expectedOutPut = `/static/img/weather/png/64/${abbr}.png`;
          break;
        default:
          expectedOutPut = `/static/img/weather/${abbr}.svg`;
          break;
      }
      expect(iconPath).toBe(expectedOutPut);
    });
  })



});