import { getQweatherKey } from "~~/server/utils/thirdParty";

interface IQWeather {
  "code": string,
  "updateTime": string,
  "fxLink": string,
  "now": {
    "obsTime": string,
    "temp": string,
    "feelsLike": string,
    "icon": string,
    "text": string,
    "wind360": string,
    "windDir": string,
    "windScale": string,
    "windSpeed": string,
    "humidity": string,
    "precip": string,
    "pressure": string,
    "vis": string,
    "cloud": string,
    "dew": string
  },
  "refer": {
    "sources": string[],
    "license": string[],
  }
}

export default defineEventHandler(async (event) => {
  let query = getQuery(event);
  let url = `https://devapi.qweather.com/v7/weather/now?location=${query?.location}&key=${getQweatherKey()}`;
  let qweather:IQWeather = await $fetch(url);
  let weatherData = qweather.now;
  return weatherData;
})
