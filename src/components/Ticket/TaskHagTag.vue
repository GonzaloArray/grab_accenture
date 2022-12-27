<script setup>
import { collection, deleteDoc, doc, onSnapshot, query, where } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useModal } from "../../store/Dashboard/useModalTask";
import { db } from "../../utils/firebase";

const modalTask = useModal();
const arrayEstado = ref(null)
const nameCollection = collection(db, 'status')

const status = computed(() => {
    const todoCollectionQuery = query(nameCollection, where("idTask", "==", modalTask?.arrayItem?.idFire));

    onSnapshot(todoCollectionQuery, (querySnapshot) => {
        const frPost = [];

        querySnapshot.forEach((doc) => {

            const todo = {
                name: doc.data().name,
                id: doc.data().id,
                color: doc.data().color,
                date: doc.data().date,
                idStatus: doc.id
            }

            frPost.push(todo)

        });

        arrayEstado.value = frPost;
    });
})

const handleDelete = async(id) => {
    await deleteDoc(doc(nameCollection, id));
}
</script>

<template>
    {{ status }}
    <div class="d-flex align-items-center gap-2">
        <span class="material-icons-outlined">
            label
        </span>
        <h2 class="fs-5">Hag tags</h2>
    </div>
    <div class="mt-2 d-flex gap-2 flex-wrap">
        <div v-for="status in arrayEstado" :key="status.id"
            class="px-2 d-flex align-items-center justify-content-between rounded-pill fw-bold width hover"
            :style="'background-color: #' + status.color + ';'">
            <h2 class="fs-per fw-bold">{{ status.name }}</h2>
            <button class="btn btn-sm " @click.prevent="handleDelete(status.idStatus)">
                <span class="material-icons-outlined fs-7">
                    close
                </span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.width {
    width: 110px;
}
.hover button{
    opacity: 0;
}
.hover:hover button{
    opacity: 1;
}
.fs-per{
    font-size: 11px;
}
</style>