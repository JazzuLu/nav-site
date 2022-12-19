import { getQweatherKey } from "~~/server/utils/thirdParty";

interface IGeoLocation {
  "code": string,
  "location": [
    {
      "coords": string,
      "name": string,
      "id": string,
      "lat": string,
      "lon": string,
      "adm2": string,
      "adm1": string,
      "country": string,
      "tz": string,
      "utcOffset": string,
      "isDst": string,
      "type": string,
      "rank": string,
      "fxLink": string,
    }
  ],
  "refer": {
    "sources": string[],
    "license": string[],
  }
}

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  let url = `https://geoapi.qweather.com/v2/city/lookup?location=${query?.location}&key=${getQweatherKey()}`;
  let location:IGeoLocation = await $fetch(url);
  location?.location?.forEach((item)=>{
    item.coords = `${item.lon},${item.lat}`;
  })
  return location?.location;
})
