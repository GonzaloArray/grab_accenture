<script setup>
import { collection, deleteDoc, doc } from "@firebase/firestore";
import { db } from "../../../../utils/firebase";

const props = defineProps({
    id: String,
})

const emits = defineEmits(['edit-comment'])

const taskCollection = collection(db, 'comment') 

const handleDelete = async(idComment) => {
    await deleteDoc(doc(taskCollection, idComment));
}

const handleEdit = () =>{

    emits('edit-comment', true);

}

</script>

<template>
    <div class="position-absolute end-0 top-0 d-flex align-items-center gap-2 px-2">
        <button class="btn btn-sm fs-per" @click.prevent="handleEdit">
            Edit
        </button>
        <button class="btn btn-sm fs-per" @click.prevent="handleDelete(id)">
            Eliminate
        </button>
    </div>
</template>

<style scoped>
.fs-per{
    font-size: 12px;
}
</style>