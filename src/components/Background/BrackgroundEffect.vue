<script setup>
import { ref } from '@vue/reactivity';
import { useBackground } from '../../store/useBackground.js'


const store = useBackground();

const handleBack = (id) => {
    store.back = store.background.find(back => back.id == id);
}

</script>

<template>

    <div class="d-flex justify-content-center back p-4 rounded-2">
        <button @click.prevent="handleBack(back.id)" :style="'background-color:' + back.color" class="mx-2 rounded-circle p-2 border-0" v-for="back in store.background" :key="back.id"></button>

    </div>

</template>

<style scoped>
.back{
    background-color: rgb(116, 116, 116);
    width: 200px;
}

</style>