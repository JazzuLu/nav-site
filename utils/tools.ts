import { isEmpty } from "lodash"

export interface ILocation {
  "coords": string
  "name": string
  "id": string
  "lat": string
  "lon": string
  "adm2": string
  "adm1": string
  "country": string
  "tz": string
  "utcOffset": string
  "isDst": string
  "type": string
  "rank": string
  "fxLink": string
}
const DefaultGeo: ILocation = {
  "name": "宝山",
  "id": "101020300",
  "lat": "31.39889",
  "lon": "121.48993",
  "adm2": "上海",
  "adm1": "上海市",
  "country": "中国",
  "tz": "Asia/Shanghai",
  "utcOffset": "+08:00",
  "isDst": "0",
  "type": "city",
  "rank": "23",
  "fxLink": "http://hfx.link/2be1",
  "coords": "121.48993,31.39889"
}
// 获取当前地址定位
function getGeoByNavigator() {
  return new Promise<string>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      let geo = `${position.coords.longitude},${position.coords.latitude}`;
      resolve(geo);
    }, (e) => {
      reject('未获取到位置信息');
      console.warn('未获取到位置信息')
    })
  })
}
export const getGeoLocation = async () => {
  let geoCoords = DefaultGeo;
  if (process.client) {
    const storageLoaction = JSON.parse(localStorage.getItem("geoCoords") ?? '{}');
    if (isEmpty(storageLoaction)) {
      try{
        let geo = await getGeoByNavigator();
        let data = await $fetch('/api/others/location', { query: { location: geo } });
        let value = data.length ? data[0] : DefaultGeo
        localStorage.setItem('geoCoords', JSON.stringify(value));
      }catch(e){
        localStorage.setItem('geoCoords', JSON.stringify(DefaultGeo));
      }
    } else {
      geoCoords = storageLoaction;
    }
  }
  return geoCoords;
}

export const getCurrentTime = (showSeconds?:Boolean) => {
  const now = new Date();
  let hours = now.getHours().toString();
  let minutes = now.getMinutes().toString();
  let seconds = now.getSeconds().toString();

  // 补位
  hours = hours.padStart(2, '0');
  minutes = minutes.padStart(2, '0');
  seconds = seconds.padStart(2, '0');

  return showSeconds ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
}
