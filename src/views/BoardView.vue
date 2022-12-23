<script setup>
import BrackgroundEffect from '../components/Background/BrackgroundEffect.vue';
import Todo from '../components/Todo.vue';


</script>

<template>
    <div class="overflow">
        <Todo :style="'background-color:'+ backColor?.back?.color"/>
        
    </div>
    <!-- <BrackgroundEffect /> -->
</template>

<style scoped>


</style>