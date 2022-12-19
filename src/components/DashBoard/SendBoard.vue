<script setup>
import { ref } from '@vue/reactivity';
import { useBoard } from '../../store/useBoard'


const board = useBoard();


function handleClick() {
    board.button = false;
}


</script>

<template>
    <div class="d-flex justify-content-between align-items-center">
        <h2 class="fs-4 pt-4 text-center">New Board</h2>
        <button @click.prevent="handleClick" type="button" class="btn btn-danger rounded-circle">x</button>
    </div>

    <form @submit.prevent="board.handleSubmit(board.name, board.spaceName, board.visibilityName)" method="POST">
        <div>
            <label class="fs-7" for="">Board name</label>
            <input type="text" class="form-control input__border rounded-0" v-model="board.name"
                placeholder="Ej: Brag Proyect">
        </div>
        <div class="my-3">
            <label class="fs-7" for="">Space Name</label>
            <input type="text" class="form-control input__border rounded-0" v-model="board.spaceName"
                placeholder="Ej: Busineess">
        </div>
        <div>
            <label class="fs-7" for="visi">Visibility</label>

            <select name="visi" class="form-control input__border rounded-0" id="visi" v-model="board.visibilityName"
                @input="board.visibilityName">
                <option v-for="select in board.arraySelect" :key="select.id" class="form-control" :value="select.value">
                    {{ select.name }}</option>
            </select>
        </div>
        <input type="submit" value="Send Board" class="btn btn-success w-100 mt-5">
    </form>
</template>

<style scoped>
.input__border {
    border: none;
    border-bottom: 1px solid;
}
</style>