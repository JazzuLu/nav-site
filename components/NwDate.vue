<script lang="ts" setup>
import { useLunarDate, useTime } from '~~/composables/utils'

const nwTime = useTime();
const nwDate = useLunarDate();

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
    <div class="nw_time"> {{nwTime.time}} </div>
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
