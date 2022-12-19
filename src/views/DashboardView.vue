<script setup>
import Todo from '../components/Todo.vue';
import ButtonPremiun from '../components/Premiun/ButtonPremiun.vue'


import confetti from "canvas-confetti";
import BrackgroundEffect from '../components/Background/BrackgroundEffect.vue';
import { ref } from '@vue/reactivity';
import { useBackground } from '../store/useBackground';


const backColor = useBackground();


function handleConfetti() {
    var end = Date.now() + (2 * 1000);

    // go Buckeyes!
    var colors = ['#71A5D3', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}


</script>

<template>
    <section :style="'background-color:'+ backColor?.back?.color ">
        <Todo />
        <div class="d-flex m-2">
            <ButtonPremiun @click="handleConfetti" href="" icon="workspace_premium" text="Try Premium for free"/>
    
        </div>
        <BrackgroundEffect />
    </section>
</template>

<style scoped>

</style>