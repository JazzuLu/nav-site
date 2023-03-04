<script lang="ts">
import { Ref } from 'vue';

interface MenuItem {
  name: string;
  callback: () => void;
}

export default defineComponent({
  name: "ContextMenu",
  props: {
    menuItems: {
      type: Array as () => MenuItem[],
      default: () => [],
    },
  },
  setup(props: any, context: any) {
    let a:Ref;
    const show = ref(false);
    const menu = ref<HTMLDivElement | null>(null);
    function showMenu(event: MouseEvent) {
      if (!menu.value) return;
      show.value = true;
      // menu.value = refs.menu;

      // Position menu based on click event
      const menuWidth = menu.value.offsetWidth ?? 0;
      const menuHeight = menu.value.offsetHeight ?? 0;
      let x = event.clientX;
      let y = event.clientY;
      if (x + menuWidth > window.innerWidth) {
        x -= menuWidth;
      }
      if (y + menuHeight > window.innerHeight) {
        y -= menuHeight;
      }
      console.log({ event });
      menu.value.style.top = `${y}px`;
      menu.value.style.left = `${x}px`;
    }
    function closeMenu() {
      show.value = false;
    }
    // onMounted(() => {
    //   document.body.addEventListener("click", closeMenu);
    // });
    // onUnmounted(() => {
    //   document.body.removeEventListener("click", closeMenu);
    // });
    return { show, showMenu, closeMenu };
  },
});
</script>

<template>
  <div @contextmenu.prevent="showMenu">
    <slot />
  </div>
  <div v-if="show" class="menu" ref="menu">
    <slot name="menu" v-for="item in menuItems" :item="item" :key="item.name" />
  </div>
</template>

<style>
.menu {
  position: absolute;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px;
  border-radius: 4px;
}

.menu > div {
  padding: 8px;
  cursor: pointer;
}

.menu > div:hover {
  background-color: #f5f5f5;
}

.right-click-area {
  width: 100%;
  height: 100%;
}
</style>
