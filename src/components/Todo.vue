<script setup>
import { onMounted, ref, reactive } from "vue";
import InputNew from "./InputNew.vue";

const count = ref(0);
let boards = reactive([
    {
        id: crypto.randomUUID(),
        name: "TODO",
        items: [{ id: crypto.randomUUID(), title: "Hola a todos" }],
    },
    {
        id: crypto.randomUUID(),
        name: "In progress",
        items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
    },
    {
        id: crypto.randomUUID(),
        name: "Complete",
        items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
    },
]);
function startDrag(evt, boardId, itemId) {
    console.log(boardId, itemId);
    evt.dataTransfer.dropEffect = "move";
    evt.dataTransfer.effectAllowed = "move";
    evt.dataTransfer.setData("item", JSON.stringify({ boardId, itemId }));
}
function onDrop(evt, dest) {
    const { boardId, itemId } = JSON.parse(evt.dataTransfer.getData("item"));
    console.log({ boardId, itemId });
    const board = boards.find((board) => board.id === boardId);
    const item = board.items.find((item) => item.id === itemId);
    board.items = board.items.filter((i) => i.id !== item.id);
    dest.items.push({ ...item });
}

function handleNewItem(text, board) {
    console.log(text.value);
    board.items.push({ id: crypto.randomUUID(), title: text.value });
}

function createNewBoard() {
    const name = prompt("Name of board");
    if (name) {
        const board = {
            id: crypto.randomUUID(),
            name: name,
            items: [],
        };

        boards.push(board);
    }
}
</script>

<template>
    <div>
        <nav>
            <ul>
                <li><a href="#" @click="createNewBoard">Create list</a></li>
            </ul>
        </nav>

        <section class="lists-container">
            <div class="list" @drop="onDrop($event, board)" @dragover.prevent
                @dragenter.prevent v-for="board in boards" :key="board.id">
                <h2 class="list-title">{{ board.name }}</h2>
                <div class="input mx-2">
                    <InputNew @on-new-item="(text) => handleNewItem(text, board)" />
                </div>
                <ul class="list-items">
                    <li class="rounded-2 p-2 mt-2 item drag-el" draggable="true"
                        @dragstart="startDrag($event, board.id, item.id)" v-for="item in board.items" :key="item.id">
                        {{ item.title }}
                    </li>

                </ul>
            </div>
        </section>
    </div>
</template>

<style scoped>
.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}

/* Lists */

.lists-container::-webkit-scrollbar {
    height: 2.4rem;
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
    flex: 0 0 19rem;
    display: flex;
    flex-direction: column;
    background-color: #e2e4e6;
    max-height: calc(100vh - 11.8rem);
    border-radius: 0.3rem;
    margin-right: 1rem;
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
    cursor: pointer;
}

.list-items li:last-of-type {
    margin-bottom: 0;
}

.list-items li:hover {
    background-color: #eee;
}


</style>
