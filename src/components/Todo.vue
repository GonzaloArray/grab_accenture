<script setup>
import { onMounted, ref, reactive } from "vue";
import { useRoute } from "vue-router";
import router from "../router";
import { useSendTodo } from "../store/Dashboard/useSendTodo";
import { useReadTodo } from "../store/Dashboard/useReadTodo";
import InputNew from "./InputNew.vue";

const count = ref(0);
const list = ref(false);

const sendTablero = useSendTodo();
const readTablero = useReadTodo();


const route = useRoute();
const routeId = route.params.id;


const handleDragStart = (event, boardId, itemId) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('item', JSON.stringify({ boardId, itemId }));
    event.target.style.backgroundColor = '#023047';
    event.target.style.color = '#fff';
    event.target.style.opacity = '.01';
    event.className = "grabbing";

}

const handleDragEnd = (event, boardId, itemId) => {
    event.target.style.opacity = '1';
    event.target.style.backgroundColor = 'white';
    event.target.style.color = '#000';

}

const handleDragEnter = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

}

function onDrop(evt, dest) {
    const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));

    const board = readTablero.arrayTodo.find((board) => board.id === boardId);
    const item = board.items.find((item) => item.id === itemId);
    board.items = board.items.filter((i) => i.id !== item.id);
    dest.items.push({ ...item });

}


function handleNewItem(text, board) {
    board.items.push({ id: crypto.randomUUID(), title: text.value });

}

function handleList(){
    list.value = true;
}
function handleSubmit(){
    list.value = false;
}
</script>

<template>
    <div class="mt-5">
        <section class="lists-container">
            <div class="list" @drop="onDrop($event, board)" @dragover.prevent @dragenter.prevent
                v-for="board in readTablero.arrayTodo" :key="board.id">
                <h2 class="list-title">{{ board.name }}</h2>
                <div class="input mx-2">
                    <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
                </div>
                <ul class="list-items">
                    <li class="rounded-2 p-2 mt-2 item drag-el" draggable="true"
                        @dragstart="handleDragStart($event, board.id, item.id);"
                        @dragend="handleDragEnd($event, board.id, item.id);"
                        @dragenter="handleDragEnter($event, board.id, item.id)" v-for="item in board.items"
                        :key="item.id">
                        {{ item.title }}
                    </li>
                </ul>
            </div>
            <section v-if="list == false" class="width list bg__white mx-2 p-2 d-flex align-items-center justify-content-center">
                <div>
                    <a @click.prevent="handleList" href="#" class="text-white nav-link d-flex align-items-center" >
                        <span class="material-icons-outlined">
                            add
                        </span>
                        <p class="m-0">Add another list</p>
                    </a>
                </div>
            </section>
            <form v-else method="POST" @submit.prevent="sendTablero.createNewBoard(routeId)" class="width__form list bg__white mx-2 p-2 d-flex align-items-start justify-content-center">
                <input  type="text" class="w-100 form-control" placeholder="Add list">
                <button class="btn btn-sm btn-primary mt-2">Add list</button>
            </form>

        </section>
    </div>
</template>

<style scoped>
.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;

}
.transition{
    transition: 2s all ease-in-out;
}
.bg__white {
    background-color: #0303031f;
}

.width {
    width: 150px;
    height: 50px;
}
.width__form{
    width: 150px;
    height: 100px;
}
/* Lists */

.lists-container::-webkit-scrollbar {
    height: 2.4rem;
}

.over {
    border: 3px dotted #666;
}

.lists-container::-webkit-scrollbar-thumb {
    background-color: #66a3c7;
    border: 0.8rem solid #0079bf;
    border-top-width: 0;
}

.lists-container {
    display: flex;
    align-items: start;
    padding: 0 0.8rem 0.8rem;
    overflow-x: auto;
    height: calc(100vh - 8.6rem);
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

.list-title {
    font-size: 15px;
    font-weight: 700;
    color: #333;
    padding: 1rem;
}

.list-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: start;
    padding: 0 0.6rem 0.5rem;
    overflow-y: auto;
}

.list-items::-webkit-scrollbar {
    width: 1rem;
}

.list-items::-webkit-scrollbar-thumb {
    background-color: #c4c9cc;
    border-right: 0.6rem solid #e2e4e6;
}

.list-items li {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.3;
    background-color: #fff;
    padding: 0.65rem 0.6rem;
    color: #4d4d4d;
    border-bottom: 0.1rem solid #ccc;
    border-radius: 0.3rem;
    margin-bottom: 0.6rem;
    word-wrap: break-word;
}

.list-items li:last-of-type {
    margin-bottom: 0;
}

.list-items li:hover {
    background-color: #eee;
}
</style>
