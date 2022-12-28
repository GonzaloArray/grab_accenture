<script setup>
import { useDeletePost } from '../../../store/Dashboard/CRUD/useDelete';
import { useEditBoard } from '../../../store/Dashboard/CRUD/useEditBoard';
import ButtonItem from './ButtonItem.vue';

const props = defineProps({
    idList: String
})

const deleteList = useDeletePost();
const editBoard = useEditBoard();

</script>

<template>
    <button class="me-2 mt-1 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <span class="material-icons-outlined">
            more_horiz
        </span>
    </button>
    <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
        <ButtonItem @click.prevent="editBoard.handleModal" icon="edit" info="Edit" />
        <ButtonItem icon="share" info="Share" />
        <ButtonItem @click.prevent="deleteList.handleDelete(idList)" icon="delete_forever" info="Remove" />
    </ul>
</template>

<style scoped>

</style>