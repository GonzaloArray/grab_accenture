<script setup>
import { computed, ref } from "@vue/runtime-core";
import { RouterLink } from "vue-router";
import { useReadBoard } from "../../store/useReadBoard"

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
        <div v-for="board in commentsWithId" :key="board.id" class="width">

            <RouterLink class="btn btn-sm py-3 my-1 btn-sm fs-7 bg-primary text-light witdh"
                :to="{ name: 'board', params: { id: board.idBoard } }">
                <h2 class="m-0 fs-6 text-start fw-bold">{{ board.name }}</h2>
            </RouterLink>

        </div>
    </section>

</template>

<style scoped>
.witdh {
    height: 100px;
    min-width: 150px;
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