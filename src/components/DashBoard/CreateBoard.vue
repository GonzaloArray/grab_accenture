<script setup>
import { ref } from "@vue/reactivity";
import ButtonCreate from "./ButtonDash/ButtonCreate.vue";

const button = ref(false);
const modal = ref(false);

const emits = defineEmits(["board"])

const arrayButton = ref([
    {
        id: crypto.randomUUID(),
        icon: "space_dashboard",
        title: "Create space",
        info: "Use it to manage projects, track information, or organize any activity.",
    },
    {
        id: crypto.randomUUID(),
        icon: "dashboard",
        title: "Create board",
        info: "Get up and running faster with a dashboard template.",
    },
    {
        id: crypto.randomUUID(),
        icon: "people",
        title: "Create workspace",
        info: "Use it to organize your company, your side project and your plans with family or friends.",
    },
])

function handleClick(id){
    const valor = arrayButton.value.find(elem => elem.id == id);
    
    emits("board", valor);
}


</script>

<template>
    <div class="dropdown">
        <button class="btn btn-secondary rounded-1 px-5 shadow dropdown-toggle" type="button" id="dropdownMenuButton1"
            data-bs-toggle="dropdown" aria-expanded="false">
            Create
        </button>
        <ul class="dropdown-menu w-25 shadow" aria-labelledby="dropdownMenuButton1">
            <li v-for="button in arrayButton" :key="button.id" class="my-2">
                <ButtonCreate @click="handleClick(button.id)" :title="button.title" :icon="button.icon" :info="button.info"/>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.c__primario{
    color: #023047;
}
</style>