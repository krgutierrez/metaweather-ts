import {WeatherState, WeatherStateAbbreviation, WeatherStateName} from "../weather-state";

export type IconType = 'svg' | 'ico' | 'png-small' | 'png-large';

export const getWeatherStateByAbbr = (abbr: WeatherStateAbbreviation, imageType?: IconType): WeatherState => {
  const icon = getIconUrl(imageType).replace('X', abbr);
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


export const getIconUrl = (imageType: IconType): string => {
  switch (imageType) {
    case "ico":
      return '/static/img/weather/ico/X.ico';
      case "png-large":
        return '/static/img/weather/png/X.png';
      case "png-small":
        return '/static/img/weather/png/64/X.png';
    default:
      return '/static/img/weather/X.svg';
  }
};