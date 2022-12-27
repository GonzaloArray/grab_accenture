<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from './components/Header/HeaderApp.vue';
import ModalPremium from './components/DashBoard/Premium/ModalPremium.vue';

</script>

<template>
    <header class="position-sticky end-0 start-0 top-0 z-index">
        <HeaderApp/>
    </header>
    <main>
        <RouterView />
        <ModalPremium />
    </main>
    <FooterApp/>
</template>

<style scoped>
.z-index{
    z-index: 2;
}
</style>
