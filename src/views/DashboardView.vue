<script setup>
import { ref } from '@vue/reactivity';

import Board from '../components/DashBoard/Board.vue';
import CreateBoard from '../components/DashBoard/CreateBoard.vue';
import SendBoard from '../components/DashBoard/SendBoard.vue';
import SendSpace from '../components/DashBoard/SendSpace.vue';
import { useCreate } from '../store/Header/CreateDash';

const store = useCreate()

</script>

<template>
    <section class="px-2 pt-4">
        <SendBoard v-if="store?.create?.title == 'Create board' && store.modal"/>    
        <SendSpace v-if="store?.create?.title == 'Create space' && store.modal"/>    

        <Board />

    </section>
</template>

<style scoped>
.bg__secundario {
    background-color: #023047 !important;
}
.bg__general{
    background-color: #c4c4c4;
}
</style>