<template>
  <div
    class="popup"
    ref="$popup"
    v-if="showP"
    :style="{ top: `${position.y}px`, left: `${position.x}px` }"
  >
    <slot />
  </div>
  <div v-else ref="$popup"></div>
</template>

<script setup lang="ts">
import { Ref } from "vue";

const props = defineProps<{
  e: MouseEvent | null;
  show: boolean;
  preventClass: string;
}>();

const position = ref({
  x: 0,
  y: 0,
});
const $popup = ref<HTMLElement>();
const showP = ref(false);

useClickOutside($popup, (outside: boolean) => {
  console.log(222222, $popup.value);
  if (outside && $popup.value?.classList.contains("popup")) {
    showP.value = !outside;
  }
});
onMounted(() => {
  if (!$popup.value) return;
});

const showPopup = () => {
  console.log(props.e);
  position.value = {
    x: props.e?.pageX ?? 0,
    y: props.e?.pageY ?? 0,
  };
};
watchEffect(() => {
  showPopup();
});
watchEffect(() => {
  showP.value = props.show;
});
</script>

<style>
.popup {
  position: absolute;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 4px;
  z-index: 1000;
}
</style>
