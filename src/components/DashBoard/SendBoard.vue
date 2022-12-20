<script setup>
import { ref } from '@vue/reactivity';
import { useBoard } from '../../store/useBoard'
import { useReadBoard } from '../../store/useReadBoard';


const board = useBoard();
const read = useReadBoard()


</script>

<template>
    <form class="mx-2" @submit.prevent="board.handleSubmit(board.name, board.spaceName, board.visibilityName)" method="POST">
        <h2 class="fs-4 pt-4 mb-4 text-center">New Board</h2>
        <div>
            <label class="fs-7" for="">Board name</label>
            <input type="text" class="form-control input__border bg__general rounded-0" v-model="board.name"
                placeholder="Ej: Brag Proyect">
        </div>
        <div class="my-3">
            <label class="fs-7" for="space">Space Name</label>
            <select name="space" class="form-control bg__general input__border rounded-0" id="space" v-model="board.spaceName
            ">
                <option v-for="space in read.arrayProyect" :key="space.id" class="form-control" :value="space.id">
                    {{ space.title }}</option>
            </select>
        </div>
        <div>
            <label class="fs-7" for="visi">Visibility</label>

            <select name="visi" class="form-control input__border rounded-0 bg__general" id="visi" v-model="board.visibilityName"
                @input="board.visibilityName">
                <option v-for="select in board.arraySelect" :key="select.id" class="form-control" :value="select.value">
                    {{ select.name }}</option>
            </select>
        </div>
        <input type="submit" value="Send Board" class="btn btn-success w-100 mt-5 mb-3">
    </form>
</template>

<style scoped>
.input__border {
    border: none;
    border-bottom: 1px solid;
}
.bg__general{
    background-color: #c4c4c4;
}
</style>