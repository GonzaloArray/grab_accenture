<script setup>
import ButtonItem from './ButtonItem.vue';

const props = defineProps({
    idList: String
})



</script>

<template>
    <button class="me-2 mt-1 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <span class="material-icons-outlined">
            more_horiz
        </span>
    </button>
    <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
        <ButtonItem icon="edit" info="Edit" />
        <ButtonItem icon="share" info="Share" />
        <ButtonItem :id="idList" icon="delete_forever" info="Remove" />
    </ul>
</template>

<style scoped>

</style>