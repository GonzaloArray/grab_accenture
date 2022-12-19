<script setup>
import { useBoard } from "../../store/useBoard";

const board = useBoard();
</script>

<template>

<div v-if="board.arrayBoard.length == 0">
    <h2 class="mt-3 fs-5">No empty project...</h2>
</div>
<section v-else>
    <div class="bg__primario rounded-1 p-2 text-light d-flex justify-content-between align-items-center my-2" v-for=" board in board.arrayBoard" :key="board.id">
        <h2 class="m-0 fs-5">{{ board.name }}</h2>
        <button type="button" class="btn btn-sm btn-success">View</button>
        {{ board }}
    </div>
</section>


</template>

<style scoped>

.bg__primario{
    background-color: #219ebc
;
}
</style>