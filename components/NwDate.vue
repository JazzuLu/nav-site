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
        <div class="nv_divider"></div>
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
    font-size: rem(90px);
  }
  .nw_bottom {

    display: flex;
    align-items: center;

    .nw_time_solar {
      margin-right: rem(10px);
    }

    .nv_divider {
      width: rem(2px);
      height: rem(14px);
      background-color: #fff;
      margin-top: rem(2px);
      margin-left: rem(10px);
    }
    .nw_weather {
      margin-left: rem(10px);
      i{
        margin-right: rem(5px);
        font-size: rem(18px);
      }
    }
  }
}
</style>
