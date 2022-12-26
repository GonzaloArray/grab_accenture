<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useReadBoard } from '../../store/useReadBoard';
import CreateBoard from './CreateBoard.vue';
import SpaceBoard from './SpaceBoard.vue';
import TableBoard from './TableBoard.vue';

const read = useReadBoard();

</script>

<template>
    <div class="d-flex align-items-center ps-md-2">
        <div class="d-flex align-items-center pe-3">
            <span class="material-icons-outlined fs-3">
                person
            </span>
            <h2 class="fs-5 m-0">Your boards</h2>
        </div>
        <CreateBoard />
    </div>
    <div v-if="read.arrayProyect.length == 0">
        <h2 class="mt-3 fs-5">No empty project...</h2>
    </div>
    <section class="ps-0 ps-md-2" v-else>
        <div v-for=" board in read.arrayProyect" :key="board.id">
            <SpaceBoard :boardTitle="board.title" :id="board.idSpace"/>
            <TableBoard :propId="board.id" />
        </div>
    </section>

</template>

<style scoped>
.border__space {
    border-bottom: 1px solid #0230473d;
}
</style>