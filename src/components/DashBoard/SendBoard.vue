<script setup>
import { ref } from '@vue/reactivity';
import { useCreate } from '../../store/Header/CreateDash';
import { useBoard } from '../../store/useBoard'
import { useUserStore } from '../../store/user';
import { useReadBoard } from '../../store/useReadBoard';


const user = useUserStore();
const board = useBoard();
const read = useReadBoard();
const storeCreate = useCreate();

function handleClick(){

    storeCreate.modal = false; 
}

</script>

<template>
    <form 
        class="position-absolute end-0 top-0 bottom-0 start-0 d-flex justify-content-center align-items-center container z-index"
        @submit.prevent="board.handleSubmit(board.name, board.spaceName, board.visibilityName, user?.usuario?.uid)" 
        method="POST"
    >
        <section class="bg-light rounded-2 container m-2 p-4 shadow-send width">
            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom ">
                <h2 class="fs-6">Create board</h2>
                <button @click.prevent="handleClick" class="btn btn-danger btn-sm rounded-pill">
                    <div class="d-flex align-items-center">
                        <span class="material-icons-outlined fs-7">
                            close
                        </span>
                    </div>
                </button>
            </div>
            <div class="mt-3">
                <label class="fs-7" for="board">Board name</label>
                <input type="text" name="board" id="board" class="form-control input__border bg-light rounded-0" v-model="board.name"
                    placeholder="Ej: Grab Proyect">
            </div>
            <div class="my-3">
                <label class="fs-7" for="space">Space Name</label>
                <select name="space" class="form-control bg-light input__border rounded-0" id="space" v-model="board.spaceName
                ">
                    <option v-for="space in read.arrayProyect" :key="space.id" class="paiding" :value="space.id">
                        {{ space.title }}</option>
                </select>
            </div>
            <div>
                <label class="fs-7" for="visi">Visibility</label>

                <select name="visi" class="form-control input__border rounded-0 bg-light" id="visi"
                    v-model="board.visibilityName">
                    <option v-for="select in board.arraySelect" :key="select.id" class="py-3"
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
.width{
    width: 300px;
}
.paiding{
    padding: 2rem!important;
}
.bg__general {
    background-color: #c4c4c4;
}
.z-index{
    z-index: 9999;
}
.shadow-send{
    box-shadow:  0 0 40rem 3rem #023047;
}
</style>