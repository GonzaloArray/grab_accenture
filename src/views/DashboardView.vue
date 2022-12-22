<script setup>
import { ref } from '@vue/reactivity';

import Board from '../components/DashBoard/Board.vue';
import CreateBoard from '../components/DashBoard/CreateBoard.vue';
import SendBoard from '../components/DashBoard/SendBoard.vue';
import SendSpace from '../components/DashBoard/SendSpace.vue';

const create = ref(null)
const modal = ref(false);


function handleBoard(valor){    
    create.value = valor;

    modal.value = true;
}
function handleModal(boolean){
    modal.value = boolean;
}

</script>

<template>
    <section class="px-2">
        <CreateBoard @board="handleBoard"/>
        {{ create?.title }}
        <SendBoard @modal-false="handleModal" v-if="create?.title == 'Create board' && modal"/>    
        <SendSpace @modal-false="handleModal" v-if="create?.title == 'Create space' && modal"/>    

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