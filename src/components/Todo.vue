<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useSendTodo } from "../store/Dashboard/useSendTodo";
import { useReadTodo } from "../store/Dashboard/useReadTodo";
import FeatureForm from "./DashBoard/Form/FeatureForm.vue";
import Form from "./DashBoard/Form/Form.vue";
import TodoChild from "./DashBoard/Todo/TodoChild.vue";

const count = ref(0);

const sendTablero = useSendTodo();
const readTablero = useReadTodo();


const route = useRoute();
const routeId = route.params.id;

onMounted(() => {
    readTablero.readTablero(routeId);
})

function handleList() {
    sendTablero.modal = true;
}

</script>

<template>
    <div class="mt-5">
        <section class="lists-container">
            <TodoChild :routeId="routeId"/>
            <FeatureForm @click.prevent="handleList" v-if="sendTablero.modal == false" />
            <Form v-else :routeId="routeId" />
        </section>
    </div>
</template>

<style scoped>
.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;

}

/* Lists */

.lists-container::-webkit-scrollbar {
    height: .8rem;
}

.lists-container::-webkit-scrollbar-thumb {
    background-color: #0000005c;
    border: 0.8rem solid #9e9e9e74;
    border-radius: 2rem;
}

.lists-container {
    display: flex;
    align-items: start;
    padding: 0 0.8rem 0.8rem;
    overflow-x: auto;
    height: calc(100vh - 8.6rem);
}
</style>
