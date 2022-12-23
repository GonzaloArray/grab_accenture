<script setup>
import { ref } from "@vue/reactivity";
import { useSendTodo } from "../../../store/Dashboard/useSendTodo";

const sendTablero = useSendTodo()

const props = defineProps({
    routeId: String
});

function handleClose() {
    sendTablero.modal = false;
}

</script>

<template>
    <form method="POST" @submit.prevent="sendTablero.createNewBoard(routeId, sendTablero.nombre)"
        class="width__form list bg__white mx-2 p-2 d-flex align-items-start justify-content-center">
        <input v-model="sendTablero.nombre" type="text" class="w-100 form-control" placeholder="Add list">
        <div class="d-flex align-items-center mt-2">
            <button class="btn btn-sm btn-primary">Add list</button>
            <span @click="handleClose" class="material-icons-outlined ms-2 m-0">
                close
            </span>
        </div>
    </form>
</template>

<style scoped>
.width__form {
    width: 150px;
    height: 100px;
}

.list {
    flex: 0 0 17.5rem;
    display: flex;
    flex-direction: column;
    background-color: #a2a3a3;
    max-height: calc(100vh - 11.8rem);
    border-radius: 0.3rem;
    margin-right: 1rem;
    cursor: pointer;
}

.list:last-of-type {
    margin-right: 0;
}
</style>