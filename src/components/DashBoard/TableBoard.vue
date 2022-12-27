<script setup>
import { computed, ref } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import { userDeleteTablero } from "../../store/Dashboard/CRUD/userDeleteTablero";
import { useEditTablero } from "../../store/Dashboard/CRUD/useEditTablero";
import { useReadBoard } from "../../store/useReadBoard"

const deleteTablero = userDeleteTablero();
const editTablero = useEditTablero();


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
            <button v-if="editTablero.modal == false" @click.prevent="deleteTablero.handleDelete(board.idTablero)"
                class="btn position-absolute end-0 p-2 text-dark close">
                <span class="material-icons-outlined fs-6">
                    close
                </span>
            </button>
            <button v-if="editTablero.modal == false" @click.prevent="editTablero.handleModal"
                class="btn position-absolute end-0 mt-4 p-2 text-dark close">
                <span class="material-icons-outlined fs-6">
                    edit
                </span>
            </button>
            <RouterLink v-if="editTablero.modal == false"
                class="btn btn-sm py-3 my-1 btn-sm fs-7 bg-primary text-light witdh bg__hover delete"
                :to="{ name: 'board', params: { id: board.idBoard } }">
                <h2 class="m-0 fs-6 text-start fw-bold">{{ board.name }}</h2>
            </RouterLink>
            <form v-else method="POST" @submit.prevent="editTablero.handleEdit(board.idTablero, board.name)"
                class="btn btn-sm py-3 my-1 btn-sm fs-7 bg-primary text-light witdh bg__hover delete">
                <input type="text" class="bg-primary text-light shadow border-0 p-2" @blur="editTablero.handleEdit(board.idTablero, board.name)" v-model="board.name">
                <button type="button" class="btn" @click="editTablero.handleCancel">
                    <span class="material-icons-outlined fs-6">
                        close
                    </span>
                </button>
            </form>
        </div>
    </section>

</template>

<style scoped>
.witdh {
    height: 100px;
    width: 150px;
}

.bg__hover:hover {
    background-color: #0271a5 !important;
}

.hover button {
    opacity: 0 !important;
}

.hover:hover button {
    opacity: 1 !important;
    color: white !important;
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