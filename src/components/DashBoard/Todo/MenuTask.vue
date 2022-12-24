<script setup>
import ButtonTask from './ButtonTask.vue';


const props = defineProps({
    idList: String
})



</script>

<template>
    <button class="me-2 mt-1 border-0 bg-transparent" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false">
        <span class="material-icons-outlined fs-6">
            brush
        </span>
    </button>
    <ul class="dropdown-menu rounded-1 shadow p-0 post" aria-labelledby="dropdownMenuButton1">
        <ButtonTask icon="edit" info="Edit" />
        <ButtonTask icon="share" info="Share" />
        <ButtonTask :id="idList" icon="delete_forever" info="Remove" />
    </ul>
</template>

<style scoped>
.z-index {
    z-index: 21212;
}
</style>