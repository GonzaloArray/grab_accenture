<script setup>
import { collection, onSnapshot, query, where } from '@firebase/firestore';
import { computed, onMounted, ref } from '@vue/runtime-core';
import { useReadTag } from '../../../store/Dashboard/Task/useReadTag';
import { db } from '../../../utils/firebase';

const status = useReadTag()

const props = defineProps({
    idTask: String,
})

const arrayEstado = ref(null)

onMounted(()=>{
    const nameCollection = collection(db, 'status')
    const todoCollectionQuery = query(nameCollection, where("idTask", "==", props.idTask));

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


</script>

<template>
    <div v-if="arrayEstado?.length" class="d-flex gap-2 mx-1 flex-wrap">
        <button v-for="status in arrayEstado" :key="status.id" class="btn btn-sm fs-per fw-bold rounded-pill" :style="'background-color: #' + status.color + '!important;'">
            {{ status.name }}
        </button>
    </div>

</template>


<style scoped>
.fs-per{
    font-size: 10px!important;
}
</style>