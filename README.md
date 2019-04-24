### Metaweather API Typescript

A client side interface for using metaweather api.


##### NOTE
The return of `searchLocations`, `searchLocationByLattLong` and `searchLocationByWoeId` returns is on camel case.
Metaweather return them as snake case.
See references: https://www.metaweather.com/api/

#### Methods:
**searchLocations**  
Search locations by string query.
Parameters:  
`text` - (string) string query ie: London

````
import { searchLocations } from 'meta-weather-ts';
 
searchLocations("london").then(...).catch(...);

 ````   
 
**searchLocationByLattLong**  
Search locations by latitude and longitude.  
&nbsp; &nbsp; Parameters:  
&nbsp; &nbsp; `latitude` - (number) The latitude of the location to search  
&nbsp; &nbsp; `longitude` - (number) The longitude of the location to search
 
 ````
import { searchLocationByLattLong } from 'meta-weather-ts';
 
searchLocationByLattLong(123.4567, 765.4321).then(...).catch(...);

 ````
 
**searchLocationByWoeId**
Search location by location id.  
&nbsp; &nbsp; Parameters:  
&nbsp; &nbsp; `woeid` - (number) The id of the location

````
import { searchLocationByWoeId } from 'meta-weather-ts';
 
searchLocationByWoeId(12345).then(...).catch(...);

 ````

**getWeatherStateByAbbr**  
Get the name of the weather state abbreviation. Example: `sn` will return `Snow`  
&nbsp; &nbsp; Parameters:  
&nbsp; &nbsp; `weatherStateAbbr` - The abbreviation for the weather state. Values: `sn, sl, h, t, hr, lr, s, hc, lc, c`
````
import { searchLocationByWoeId } from 'meta-weather-ts';
 
const name = getWeatherStateByAbbr('sn'); // Snow
const name = getWeatherStateByAbbr('h'); // Hail
const name = getWeatherStateByAbbr('lc'); // Light Cloud

 ````


**getIconUrl**  
Get the url for the weather `icon`.  
&nbsp; &nbsp; Parameters:  
&nbsp; &nbsp; `weatherStateAbbr` - The abbreviation for the weather state. Values: `sn, sl, h, t, hr, lr, s, hc, lc, c`  
&nbsp; &nbsp; `image type` - The image type desired for the icon. Values: `ico, png-large, png-small, svg`. Default is `svg`
````
import { getIconUrl } from 'meta-weather-ts';
 
const name = getIconUrl('sn'); // /static/img/weather/sn.svg
const name = getIconUrl('sn', 'ico'); // /static/img/weather/ico/sn.ico
const name = getIconUrl('sn', 'png-large'); // /static/img/weather/png/sn.png
const name = getIconUrl('sn', 'png-small'); // /static/img/weather/png/64/sn.png

 ````