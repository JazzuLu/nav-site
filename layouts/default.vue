<template>
    <div class="nw_app">
        <div class="nw_sidebar"></div>
        <div class="nw_content">
            <ClientOnly>
                <NuxtPage />
            </ClientOnly>
        </div>
        <div class="nw_footer"></div>
    </div>
</template>

<script setup>

</script>

<style>
body {
    font-family: "Microsoft YaHei UI", serif;
    padding: 0;
    margin: 0;
}

.nw_app {
    width: 100vw;
    height: 100vh;
    background-image: url(~/assets/images/a.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>
