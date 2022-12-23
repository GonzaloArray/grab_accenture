<script setup>
import { ref } from "@vue/reactivity";
import { useCreate } from "../../store/Header/CreateDash";
import ButtonCreate from "./ButtonDash/ButtonCreate.vue";

const store = useCreate();

const button = ref(false);
const modal = ref(false);



function handleClick(id) {
    
    const valor = store.arrayButton.find(elem => elem.id == id);

    store.create = valor;

    store.modal = true;

}


</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary rounded-1 shadow dropdown-toggle fs-7 fw-bold" type="button"
            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            Create
        </button>
        <ul class="dropdown-menu shadow width" aria-labelledby="dropdownMenuButton1">
            <li v-for="button in store.arrayButton" :key="button.id">
                <ButtonCreate class="hover p-2" @click="handleClick(button.id)" :title="button.title"
                    :icon="button.icon" :info="button.info" />
            </li>
        </ul>
    </div>
</template>

<style scoped>
.width {
    width: 300px !important;
}

.hover:hover {
    background-color: rgba(113, 112, 112, 0.182) !important;
}
</style>