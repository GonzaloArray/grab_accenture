<script setup>
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useDeleteTask } from "../../../store/Dashboard/CRUD/useDeleteTask";
import { useModal } from "../../../store/Dashboard/useModalTask";
import { useReadTask } from "../../../store/Dashboard/useReadTask";
import TaskStatus from "../ModalTask/TaskStatus.vue";

const readTask = useReadTask();
const modalTask = useModal();
const deleteTask = useDeleteTask();

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
        <li @click.prevent="modalTask.handleModal(item)" class="rounded-1 p-0 mt-2 item drag-el position-relative"
            draggable="true" @dragstart="handleDragStart($event, idTablero, item.id);"
            @dragend="handleDragEnd($event, idTablero, item.id);"
            @dragenter="handleDragEnter($event, idTablero, item.id)" v-for="item in taskWithId" :key="item.id">
            <div class="d-flex align-items-start hover flex-column-reverse position-relative py-1">
                <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" class="nav-link p-2 w-100 text-start">
                    <p>{{ item.title }}</p>
                </a>
                <a class="nav-link mt-1 p-1 position-absolute end-0" @click.prevent="deleteTask.handleDelete(item.idFire)">
                    <span class="material-icons-outlined fs-6">
                        close
                    </span>
                </a>
                <TaskStatus :idTask="item.idFire"/>

            </div>
        </li>
    </ul>
</template>

<style scoped>
.hover span{
    opacity: 0;
}
.hover:hover span{
    opacity: 1;
    transition: .3s;
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