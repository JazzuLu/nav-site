<script lang="ts" setup>
interface iItem {
  name: string;
  description: string;
  icon: string;
  link: string;
  iconLink?: string;
}

defineProps<{ item: iItem }>();

const clickIcon = async (item: iItem) => {
  // await navigateTo(item.link, { external: true });
  window.open(item.link, "_blank");
};
</script>

<template>
  <div class="nwg_item" :title="item.description">
    <div class="nwg_icon" @click="clickIcon(item)">
      <img :src="item.icon" alt="" />
    </div>
    <div class="nwg_name">
      {{ item.name }}
    </div>
  </div>
</template>

<style lang="scss">
.nwg_item {
  width: rem(60);
  height: rem(60);
  padding: rem(15) rem(15) rem(30);
  .nwg_icon {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: var(--icon-radius);
    box-shadow: 0 0 5px #0000001a;
    transition: 0.2s;
    cursor: pointer;
    img {
      display: block;
      object-fit: var(--icon-size, cover);
      width: 100%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: cover;
      background-color: var(--icon-bg-color, #fff);
    }
  }
  .nwg_name {
    width: calc(100% + var(--icon-gap-y));
    margin-left: calc(var(--icon-gap-y) / 2 * -1);
    margin-top: 6px;
    display: var(--icon-name);
    text-align: center;
    color: var(--icon-nameColor);
    font-size: var(--icon-nameSize);
    line-height: 1.1;
    filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.8));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
