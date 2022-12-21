<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from './components/Header/HeaderApp.vue';


</script>

<template>
    <HeaderApp/>
    <main>
        <RouterView />
    </main>
    <FooterApp/>
</template>

<style scoped>

</style>
