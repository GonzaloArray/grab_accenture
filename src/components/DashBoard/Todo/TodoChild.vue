<script setup>
import { addDoc, collection, doc, query, updateDoc, where } from '@firebase/firestore';
import { onMounted } from '@vue/runtime-core';
import { useReadTodo } from '../../../store/Dashboard/useReadTodo';
import { useReadTask } from '../../../store/Dashboard/useReadTask'
import { useModal } from '../../../store/Dashboard/useModalTask'
import { db } from '../../../utils/firebase';
import InputNew from '../../InputNew.vue';
import ItemTask from './ItemTask.vue';
import MenuItem from './MenuItem.vue';
import { useEditBoard } from '../../../store/Dashboard/CRUD/useEditBoard';


const readTablero = useReadTodo();
const readTask = useReadTask();
const modalTask = useModal();
const edit = useEditBoard();

const props = defineProps({
    routeId: String,
})

const onDrop = (evt, dest) => {

    const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));

    const board = readTablero.arrayTodo.find((board) => board.id === boardId);
    const item = readTask.arrayTask.find((item) => item.id === itemId);
    const washingtonRef = doc(db, "task", item.idFire);

    updateDoc(washingtonRef, {
        idBoard: dest.id
    });


}

function handleNewItem(text, boarId) {

    const taskCollection = collection(db, 'task');

    addDoc(taskCollection, {
        title: text.value,
        id: crypto.randomUUID(),
        idBoard: boarId,
        idProyect: props.routeId,
        date: Date.now(),
    });

}

onMounted(() => {
    readTask.readTask(props.routeId);
})
</script>

<template>
    <div class="list" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent
        v-for="board in readTablero.arrayTodo" :key="board.id">
        <div class="d-flex justify-content-between align-items-center">
            <form @keyup.esc="edit.handleCancel" @submit.prevent="edit.handleEdit(board.id, board.name)" v-if="edit.modal" method="POST" class="ms-2">
                <input type="text" v-model="board.name" class="border ps-2 bg__input">
            </form>
            <h2 v-else class="list-title">{{ board.name }}</h2>
            <MenuItem :idList="board.idList" />
        </div>
        <div class="input mx-2">
            <InputNew @on-new-item="(text) => handleNewItem(text, board.id)" />
        </div>
        <ItemTask :idTablero="board.id" />
    </div>
</template>

<style scoped>
.border{
    border: 0px solid!important;
    border-bottom: 2px solid #00000068!important;
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
.bg__input{
    background-color: #A2A3A3!important;
}
.list:last-of-type {
    margin-right: 0;
}

.list-title {
    font-size: 15px;
    font-weight: 700;
    color: #333;
    padding: 1rem;
}
</style>