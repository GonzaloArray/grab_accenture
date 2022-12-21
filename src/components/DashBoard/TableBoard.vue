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
    <div v-for="board in commentsWithId" :key="board.id" class="d-flex justify-content-between align-items-center">

        <RouterLink class="btn w-100 btn-sm py-3 my-1 btn-sm fs-7 bg__second"
            :to="{ name: 'board', params: { id: board.idBoard } }">
            <div class="d-flex align-items-center">
                <p class="m-0 witdh bg-primary me-2"></p>
                <h2 class="m-0 fs-6">{{ board.name }}</h2>
            </div>
        </RouterLink>

    </div>

</template>

<style scoped>
.witdh {
    width: 20px;
    height: 20px;
}

.bg__second {
    background-color: #0000001c;
}
</style>