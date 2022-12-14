<script lang="ts" setup>
import { Solar, Lunar } from 'lunar-typescript'

const nwTime = ref<{ time: string, timer: NodeJS.Timer | null }>({
  time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  timer: null
});
const nwDate = ref({
  solarDate: '',
  week: '',
  lunarDate: '',
});

onMounted(() => {
  getDate();
  getTime();
  // getWeather();
});

const getDate = () => {
  let solar = Solar.fromDate(new Date());
  let lunar = Lunar.fromDate(new Date());

  nwDate.value = {
    solarDate: `${solar.getMonth()}月${solar.getDay()}日`,
    lunarDate: `${lunar.getMonthInChinese()}月${lunar.getDayInChinese()}`,
    week: `星期${lunar.getWeekInChinese()}`,
  }
}

const getTime = () => {
  nwTime.value.timer = setInterval(() => {
    nwTime.value.time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }, 1000)
}
const getWeather = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    console.log('position', position)
  }, (e) => {
    console.log('未获取到位置信息')
  })
}


</script>

<template>
  <div class="nw_date_content">
    <div class="nw_time"> {{ nwTime.time }} </div>
    <div class="nw_bottom">
      <div class="nw_date">
        <span class="nw_time_solar">{{ nwDate.solarDate }}{{ nwDate.week }}</span>
        <span class="nw_time_lunar">{{ nwDate.lunarDate }}</span>
        <span class="nw_time_lunar">🌧</span>
      </div>
      <div class="nw_weather">

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nw_date_content {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;

  .nw_time {
    font-size: rem(90);
  }
  
  .nw_time_solar {
    margin-right: rem(10);
  }
}
</style>
