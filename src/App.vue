<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderApp from './components/Header/HeaderApp.vue';


</script>

<template>
    <HeaderApp/>
    <header>
        <h1>Brag</h1>
        <nav>
            <RouterLink class="btn btn-danger" to="/">
                Home
            </RouterLink>
            <RouterLink class="btn btn-success" to="/dashboard">
                Dashboard
            </RouterLink>
            <RouterLink class="btn btn-warning" to="/landing">
                Landing
            </RouterLink>
            <RouterLink class="btn btn-primary" to="/login">
                Login
            </RouterLink>
        </nav>
    </header>
    <main>
        <RouterView />
    </main>
    <FooterApp/>
</template>

<style scoped>

</style>
