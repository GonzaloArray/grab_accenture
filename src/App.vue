<script setup>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
    <header>
       <!--<h1>Brag</h1>
        <nav>
            <RouterLink class="btn btn-danger" to="/">
                Home
            </RouterLink>
            <RouterLink class="btn btn-success" to="/dashboard">
                Dashboard
            </RouterLink>
        </nav>--> 
    </header>
    <main>
        <RouterView />
    </main>

</template>

<style scoped>

</style>
