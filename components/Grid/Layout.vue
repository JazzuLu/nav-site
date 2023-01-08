<script lang="ts" setup>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const $c = ref(null);
const q = gsap.utils.selector($c.value);
console.log(222, $c);
console.log(111, q(".nwg_layout"));

const { data } = await useFetch("/api/apps/getAppsData");
</script>
<template>
  <div class="nwg_container" ref="$c">
    <div v-for="cate in data" :key="cate.category" class="nwg_layout">
      <GridItem v-for="item in cate.items" :item="item" />
    </div>
  </div>
</template>

<style lang="scss">
.nwg_container {
  --icon-radius: 16px;
  --icon-size: 60px;
  --icon-max-width: 1350px;
  --icon-gap-x: 30px;
  --icon-gap-y: 30px;
  --icon-opacity: 1;
  --icon-name: block;
  --icon-nameSize: 12px;
  --icon-nameColor: #fff;
}

.nwg_container {
  display: flex;
  justify-content: center;
  width: 100vw;
  padding: 2vh 60px;
  box-sizing: border-box;
  .nwg_layout {
    position: relative;
    max-width: 1260px;
    width: 100%;
    display: grid;
    grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fill, calc(var(--icon-size) + var(--icon-gap-y)));
    grid-template-rows: repeat(auto-fill, calc(var(--icon-size) + var(--icon-gap-x)));
    justify-content: center;
    .nwg_item {
    }
  }
}
</style>
