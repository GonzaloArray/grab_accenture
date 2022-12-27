<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from './components/Header/HeaderApp.vue';
import ModalPremium from './components/DashBoard/Premium/ModalPremium.vue';

</script>

<template>
    <header>
        <HeaderApp/>
    </header>
    <main>
        <RouterView />
        <ModalPremium />
    </main>
    <FooterApp/>
</template>

<style scoped>

</style>
