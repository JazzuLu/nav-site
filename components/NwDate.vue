<script lang="ts" setup>
import { useLunarDate, useTime } from '~~/composables/utils'

const nwTime = useTime();
const nwDate = useLunarDate();
const weather = ref();

const getWeather = async () => {
  let geo = await getGeoLocation();
  weather.value = await $fetch('/api/others/weather', { method: 'get', params: { location: geo.coords } });
}
onMounted(()=>{
  getWeather();
})


</script>

<template>
  <ClientOnly>
    <div class="nw_date_content">
      <div class="nw_time"> {{ nwTime.time }} </div>
      <div class="nw_bottom">
        <div class="nw_date">
          <span class="nw_time_solar">{{ nwDate.solarDate }}{{ nwDate.week }}</span>
          <span class="nw_time_lunar">{{ nwDate.lunarDate }}</span>
        </div>
        <div class="nv_divder"></div>
        <div class="nw_weather">
          <i :class="`qi-${weather?.icon}-fill`"></i>
          <span>{{weather?.temp}}℃</span>
        </div>
      </div>
    </div>
  </ClientOnly>
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
  .nw_bottom {

    display: flex;
    align-items: center;

    .nw_time_solar {
      margin-right: rem(10);
    }

    .nv_divder {
      width: rem(2);
      height: rem(14);
      background-color: #fff;
      margin-top: rem(2);
      margin-left: rem(10);
    }
    .nw_weather {
      margin-left: rem(10);
      i{
        margin-right: rem(5);
        font-size: rem(18);
      }
    }
  }
}
</style>
