<script setup>
import { ref } from "@vue/reactivity";
import { useTag } from "../../../store/Dashboard/Task/useTag";

const props = defineProps({
    idTask: String,
})

const status = useTag();

</script>

<template>
    <div class="dropdown mt-2">
        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
            data-bs-toggle="dropdown" aria-expanded="false">
            Hang tags
        </button>
        <ul class="dropdown-menu rounded-0 py-3" aria-labelledby="dropdownMenu2">
            <li>
                <button v-for="tag in status.arrayTag" :key="tag.id" class="dropdown-item fs-7 py-2" type="button" @click.prevent="status.handleTag(tag.id, tag.name, tag.color, idTask)">
                    <div class="d-flex align-items-center">

                        <span class="btn btn-sm py-2 rounded-circle" :style="'background-color: #' + tag.color"></span>
                        <p class="m-0 ps-2 fs-7">{{ tag.name }}</p>
                    </div>
                </button>
            </li>
        </ul>
    </div>
</template>

<style scoped>

</style>