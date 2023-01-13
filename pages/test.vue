<script lang="ts" setup>
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import InertiaPlugin from "~/assets/js/InertiaPlugin";
gsap.registerPlugin(Draggable, InertiaPlugin);

onMounted(() => {
  Draggable.create(".box", {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: "#container",
    inertia: true,
  });
});
</script>

<template>
  <PopupContextMenu />

  <div id="container">
    <div class="box">123</div>
  </div>
</template>

<style scoped>
#container {
  background: #000;
  width: 80vw;
  height: 80vh;
}
.box {
  background: red;
  width: 160px;
  height: 80px;
}
</style>
