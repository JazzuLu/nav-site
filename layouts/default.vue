<template>
  <div class="nw_app">
    <div class="nw_sidebar"></div>
    <div class="nw_content">
      <ClientOnly>
        <NuxtPage />
        <GridLayout />
      </ClientOnly>
    </div>
    <div class="nw_footer"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.nw_app {
  width: 100vw;
  height: 100vh;
  background-image: url(~/assets/images/a.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
