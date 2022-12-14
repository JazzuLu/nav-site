<template>
  <div class="nw_app" :style="`background-image: url(${backgroundImg})`">
    <div class="nw_sidebar">

    </div>
    <div class="nw_content">
      <nuxt/>
    </div>
    <div class="nw_footer">

    </div>
  </div>
</template>

<script>
import bg from 'assets/images/iTab-571998.png'
export default {
  name: 'DefaultLayout',
  data () {
    return {
      backgroundImg:bg,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
    }
  }
}
</script>

<style>
.nw_app{ width: 100vw; height: 100vh; background-size: cover; background-position: center; background-repeat: no-repeat; }
</style>

