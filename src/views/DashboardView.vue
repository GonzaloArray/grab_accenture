<script setup>
import { ref } from '@vue/reactivity';


import { useBackground } from '../store/useBackground';
import { useConfetti } from '../store/useConfetti';
import { useBoard } from '../store/useBoard';

import Todo from '../components/Todo.vue';
import ButtonPremiun from '../components/Premiun/ButtonPremiun.vue'
import BrackgroundEffect from '../components/Background/BrackgroundEffect.vue';
import Board from '../components/DashBoard/Board.vue';
import SendBoard from '../components/DashBoard/SendBoard.vue';


const backColor = useBackground();
const confeti = useConfetti();
const board = useBoard();



</script>

<template>
    <section :style="'background-color:'+ backColor?.back?.color" class="px-2">
        <button v-if="board.button == false" @click.prevent="board.button = true" type="button" class="w-100 my-2 btn  rounded-1 fs-6 bg__secundario text-light">Create Board</button>
        <SendBoard v-else />
        
        <Board />

        <div class="d-flex m-2">
            <ButtonPremiun @click="confeti.handleConfetti" href="" icon="workspace_premium" text="Try Premium for free"/>
        </div>
        <BrackgroundEffect />
    </section>
</template>

<style scoped>
.bg__secundario{
    background-color: #023047!important;
}
</style>