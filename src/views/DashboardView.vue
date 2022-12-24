<script setup>
import Sidebar from '../components/Sidebar/Sidebar.vue';
import Board from '../components/DashBoard/Board.vue';
import SendBoard from '../components/DashBoard/SendBoard.vue';
import SendSpace from '../components/DashBoard/SendSpace.vue';
import { useCreate } from '../store/Header/CreateDash';
import { useSidebar } from '../store/Sidebar/useSidebar';

const store = useCreate();
const sidebar = useSidebar();


</script>

<template>
    <div class="d-flex">
        <Sidebar />
        <section class="px-2 pt-4 toggle" :class="sidebar.modal == true && 'toggle-modal'">
            <SendBoard v-if="store?.create?.title == 'Create board' && store.modal" />
            <SendSpace v-if="store?.create?.title == 'Create space' && store.modal" />

            <Board />

        </section>
    </div>
</template>

<style scoped>
.bg__secundario {
    background-color: #023047 !important;
}

.bg__general {
    background-color: #c4c4c4;
}

.toggle {
    margin-left: 0px;
}

@media (min-width: 768px) {
    .toggle {
        margin-left: 300px;
    }
}

.toggle-modal {
    margin-left: 40px;
}
</style>