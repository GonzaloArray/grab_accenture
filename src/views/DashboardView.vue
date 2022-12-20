<script setup>
import { ref } from '@vue/reactivity';
import { useBackground } from '../store/useBackground';
import { useConfetti } from '../store/useConfetti';
import { useBoard } from '../store/useBoard';
import { useReadBoard } from '../store/useReadBoard';

import Todo from '../components/Todo.vue';
import ButtonPremiun from '../components/Premiun/ButtonPremiun.vue'
import Board from '../components/DashBoard/Board.vue';
import SendBoard from '../components/DashBoard/SendBoard.vue';
import SendSpace from '../components/DashBoard/SendSpace.vue';


const backColor = useBackground();
const confeti = useConfetti();
const board = useBoard();
const read = useReadBoard();

</script>

<template>
    <section class="px-2">
        <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item rounded-2">
                <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed rounded-2 bg__secundario text-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Create Space
                    </button>
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse bg__general" aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample">
                    <SendSpace />
                </div>
            </div>
            <div class="accordion-item rounded-2" v-if="read.arrayProyect.length">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed rounded-2 bg__secundario text-light" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        Create Board
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse bg__general" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample">
                    <SendBoard />
                </div>
            </div>
        </div>

        <Board />

<!--         <div class="d-flex p-2">
            <ButtonPremiun @click="confeti.handleConfetti" href="" icon="workspace_premium"
                text="Try Premium for free" />
        </div> -->
    </section>
</template>

<style scoped>
.bg__secundario {
    background-color: #023047 !important;
}
.bg__general{
    background-color: #c4c4c4;
}
</style>