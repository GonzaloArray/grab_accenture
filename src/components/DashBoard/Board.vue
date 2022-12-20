<script setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useReadBoard } from '../../store/useReadBoard';
import TableBoard from './TableBoard.vue';


const read = useReadBoard();




</script>

<template>

    <div v-if="read.arrayProyect.length == 0">
        <h2 class="mt-3 fs-5">No empty project...</h2>
    </div>
    <section v-else>
        <div v-for=" board in read.arrayProyect" :key="board.id">
            <div class="p-2 d-flex justify-content-between align-items-center my-2 border__space">
                <h2 class="m-0 fs-6">{{ board.title }}</h2>
                <span class="material-icons-outlined">
                    more_horiz
                </span>
            </div>
            <TableBoard :propId="board.id"/>
        </div>
    </section>

</template>

<style scoped>
.border__space {
    border-bottom: 1px solid #023047;
}
</style>