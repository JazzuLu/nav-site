import {
  Lunar,
  Solar
} from "lunar-javascript"

// 获取阴阳历
export const useLunarDate = () => {
  let solar = Solar.fromDate(new Date());
  let lunar = Lunar.fromDate(new Date());

  return {
    solarDate: `${solar.getMonth()}月${solar.getDay()}日`,
    lunarDate: `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    week: `星期${lunar.getWeekInChinese()}`,
  }
}

// 时间计时器
export const useTime = () => {

  const nwTime = ref({
    time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    timer: null
  });
  
  onMounted(() => {
    getTime();
  });
  onBeforeUnmount(()=>{
    clearInterval(nwTime.timer)
  });
  
  const getTime = () => {
    nwTime.value.timer = setInterval(() => {
      nwTime.value.time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }, 1000)
  }

  return nwTime
}
