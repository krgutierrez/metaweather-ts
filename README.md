### Metaweather API Typescript

A Node JS interface for [metaweather api]([https://www.metaweather.com/api/)

##### NOTE
- The return of `searchLocations`, `searchLocationByLattLong` and `searchLocationByWoeId` returns is on camel case.
Metaweather return them as snake case.
See references: https://www.metaweather.com/api/
- metaweather api resposne header does not have `Access-Control-Allow-Origin: *`. If you would use this for client side, you would need use some plugins for browsers to allow cors or disable Chrome's same origin policy (if you are using Chrome)

####Creating New Instance of MetaWeatherApi Class
````
import { MetaWeatherApi } from 'metaweather-ts';

const metaWeatherApi = new MetaWeatherApi();
````

####Replacing Axios for HTTP Requests
````
import { MetaWeatherApi } from 'metaweather-ts';

// Generic is the configuration interface of your HTTP client. Default is "any"
// For Axios, it is AxiosRequestConfig (Current implementation)
class CustomHttpClient extends BaseHttpClient<CustomHttpClientConfig> {

    // TODO: Implement own implementation for GET request.  
    // get<Data = any>(url: string): Promise<HttpClientResponse<Data>>;

}

const httpClient = new CustomHttpClient({ });

const metaWeatherApi = new MetaWeatherApi(new CustomHttpClient());
```` 

#### Methods:
**searchLocations**  
Parameters:  
`text` - (string) string query ie: London

````
import { searchLocations } from 'metaweather-ts';
 
searchLocations("london").then(...).catch(...);

 ````   
 ---
**searchLocationByLattLong**    
Parameters:  
`latitude` - (number) The latitude of the location to search  
`longitude` - (number) The longitude of the location to search
 
 ````
import { searchLocationByLattLong } from 'metaweather-ts';
 
searchLocationByLattLong(123.4567, 765.4321).then(...).catch(...);

 ````
 
 ---
 
**searchLocationByWoeId**  
Parameters:  
`woeid` - (number) The id of the location

````
import { searchLocationByWoeId } from 'metaweather-ts';
 
searchLocationByWoeId(12345).then(...).catch(...);

 ````
 
 ---

**getWeatherStateByAbbr**    
Parameters:  
`weatherStateAbbr` - The abbreviation for the weather state. Values: `sn, sl, h, t, hr, lr, s, hc, lc, c`
````
import { searchLocationByWoeId } from 'metaweather-ts';
 
const name = getWeatherStateByAbbr('sn'); // Snow
const name = getWeatherStateByAbbr('h'); // Hail
const name = getWeatherStateByAbbr('lc'); // Light Cloud

 ````

---

**getIconUrl**    
Parameters:  
`weatherStateAbbr` - The abbreviation for the weather state. Values: `sn, sl, h, t, hr, lr, s, hc, lc, c`  
`image type` - The image type desired for the icon. Values: `ico, png-large, png-small, svg`. Default is `svg`
````
import { getIconUrl } from 'metaweather-ts';
 
const name = getIconUrl('sn'); // /static/img/weather/sn.svg
const name = getIconUrl('sn', 'ico'); // /static/img/weather/ico/sn.ico
const name = getIconUrl('sn', 'png-large'); // /static/img/weather/png/sn.png
const name = getIconUrl('sn', 'png-small'); // /static/img/weather/png/64/sn.png

 ````
 
 Please file an issue if you have encounter one. I will try my best to fix it as soon as possible. :D 
