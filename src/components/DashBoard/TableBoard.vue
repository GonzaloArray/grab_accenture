<script setup>
import { computed, ref } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import { userDeleteTablero } from "../../store/Dashboard/CRUD/userDeleteTablero";
import { useReadBoard } from "../../store/useReadBoard"

const deleteTablero = userDeleteTablero();

const commentsWithId = ref([])

const props = defineProps({
    propId: String
})

const read = useReadBoard();

const updateComments = computed(() => {
    commentsWithId.value = read.arrayBoard.filter(board => board.id === props.propId)
})


</script>

<template>
    {{ updateComments }}
    <section class="d-flex flex-wrap gap-3">
        <div v-for="board in commentsWithId" :key="board.id" class="position-relative hover">
            <button @click.prevent="deleteTablero.handleDelete(board.idTablero)" class="btn position-absolute end-0 p-2 text-dark delete">
                <span class="material-icons-outlined fs-6">
                    close
                </span>
            </button>
            <RouterLink class="btn btn-sm py-3 my-1 btn-sm fs-7 bg-primary text-light witdh bg__hover"
                :to="{ name: 'board', params: { id: board.idBoard } }">
                <h2 class="m-0 fs-6 text-start fw-bold">{{ board.name }}</h2>
            </RouterLink>

        </div>
    </section>

</template>

<style scoped>
.witdh {
    height: 100px;
    width: 150px;
}
.bg__hover:hover{
    background-color: #0d2e3f !important;
}
.hover button{
    opacity: 0!important;
}
.hover:hover button{
    opacity: 1!important;
    color: white!important;
}

@media (min-width: 768px) {
    .witdh {
        min-width: 200px;
    }
}

.bg__second {
    background-color: #0000001c;
}
</style>