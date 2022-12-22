<script setup>
import { ref } from '@vue/reactivity';
import { useBoard } from '../../store/useBoard'
import { useReadBoard } from '../../store/useReadBoard';

const emits = defineEmits(['modal-false']);

const board = useBoard();
const read = useReadBoard();

function handleClick(){

    emits('modal-false', false)
}


</script>

<template>
    <form class="position-absolute end-0 top-0 mt-5 bottom-0 start-0 container w-25"
        @submit.prevent="board.handleSubmit(board.name, board.spaceName, board.visibilityName)" method="POST">
        <section class="bg-light rounded-2 container m-2 p-4 shadow">
            <button @click.prevent="handleClick" class="btn btn-danger btn-sm rounded-pill">
                <div class="d-flex align-items-center">
                    <span class="material-icons-outlined me-1 fs-7">
                        close
                    </span>
                    <p class="m-0 pe-2 fs-7">close</p>
                </div>
            </button>
            <div class="mt-3">
                <label class="fs-7" for="">Board name</label>
                <input type="text" class="form-control input__border bg-light rounded-0" v-model="board.name"
                    placeholder="Ej: Brag Proyect">
            </div>
            <div class="my-3">
                <label class="fs-7" for="space">Space Name</label>
                <select name="space" class="form-control bg-light input__border rounded-0" id="space" v-model="board.spaceName
                ">
                    <option v-for="space in read.arrayProyect" :key="space.id" class="form-control" :value="space.id">
                        {{ space.title }}</option>
                </select>
            </div>
            <div>
                <label class="fs-7" for="visi">Visibility</label>

                <select name="visi" class="form-control input__border rounded-0 bg-light" id="visi"
                    v-model="board.visibilityName" @input="board.visibilityName">
                    <option v-for="select in board.arraySelect" :key="select.id" class="form-control"
                        :value="select.value">
                        {{ select.name }}</option>
                </select>
            </div>
            <input type="submit" value="Send Board" class="btn btn-success w-100 mt-5 mb-3">

        </section>
    </form>
</template>

<style scoped>
.input__border {
    border: none;
    border-bottom: 1px solid;
}

.bg__general {
    background-color: #c4c4c4;
}

.bg__primary {
    background-color: #c4c4c4;
}
</style>