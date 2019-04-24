import {WeatherState, WeatherStateAbbreviation, WeatherStateName} from "../weather-state";

export type IconType = 'svg' | 'ico' | 'png-small' | 'png-large';

export const getWeatherStateByAbbr = (abbr: WeatherStateAbbreviation, imageType?: IconType): WeatherState => {
  const icon = getIconUrl(abbr, imageType);
  let name: WeatherStateName;
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
  return {
    name,
    icon,
    abbreviation: abbr,
  }
};


export const getIconUrl = (weatherStateAbbreviation: WeatherStateAbbreviation, imageType: IconType): string => {
  let url: string = null;
  switch (imageType) {
    case "ico":
        url = '/static/img/weather/ico/X.ico';
        break;
      case "png-large":
        url = '/static/img/weather/png/X.png';
        break;
      case "png-small":
        url = '/static/img/weather/png/64/X.png';
        break;
    default:
      url = '/static/img/weather/X.svg';
      break;
  }
  return url.replace('X', weatherStateAbbreviation);
};