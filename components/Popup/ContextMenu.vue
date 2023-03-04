<template>
  <div>
    <button class="handle" @click="handleClick">点击我显示</button>

    <PopupContainer :e="mouseE" :show="showPopup" preventClass="handle"> 123 </PopupContainer>
  </div>
</template>

<script setup lang="ts">
const mouseE = ref<MouseEvent | null>(null);
const showPopup = ref(false);

const handleClick = (e: MouseEvent) => {
  mouseE.value = e;
  showPopup.value = true;
};
</script>

<style lang=""></style>
