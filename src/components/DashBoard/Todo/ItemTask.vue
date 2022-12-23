<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useReadTask } from "../../../store/Dashboard/useReadTask";

const readTask = useReadTask();

const props = defineProps({
    idTablero: String,
})

const taskWithId = ref([]);


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

const updateTask = computed(() => {
    taskWithId.value = readTask.arrayTask.filter(board => board.idBoard === props.idTablero)
})

</script>

<template>
    {{ updateTask }}
    <ul class="list-items">
        <li class="rounded-2 p-2 mt-2 item drag-el" draggable="true"
            @dragstart="handleDragStart($event, idTablero, item.id);"
            @dragend="handleDragEnd($event, idTablero, item.id);" 
            @dragenter="handleDragEnter($event, idTablero, item.id)"
            v-for="item in taskWithId" :key="item.id">
            {{ item.title }}
        </li>
    </ul>
</template>

<style scoped>
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