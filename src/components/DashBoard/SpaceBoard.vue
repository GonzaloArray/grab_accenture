<script setup>
import { collection, deleteDoc, doc, updateDoc } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { db } from "../../utils/firebase";
import ButtonSpaceMember from "./SpaceDash/ButtonSpaceMember.vue";

const props = defineProps({
    boardTitle: String,
    id: String
});

const edit = ref(false);
const text = ref(props.boardTitle)

// Edit
function handleEdit() {
    edit.value = true;
}

function doneEdit() {

    const taskCollection = doc(db, "space", props.id);

    updateDoc(taskCollection, {
        title: text.value
    });


    edit.value = false;
}
function cancelEdit() {

    edit.value = false;
}

// Eliminated

const nameCollection = collection(db, 'space')

const handleDelete = async (idTablero) => {
    await deleteDoc(doc(nameCollection, idTablero));
}

</script>

<template>
    <div class="p-2 d-flex justify-content-between align-items-center my-3 border__space">
        <div v-if="edit == false" class="d-flex align-items-center hover">
            <h2 @dblclick="handleEdit" class="m-0 fs-6">{{ boardTitle }}</h2>
            <button type="button" class="btn" @click.prevent="handleEdit">
                <span class="material-icons-outlined fs-6">
                    edit
                </span>
            </button>
            <button type="button" class="btn" @click.prevent="handleDelete(id)">
                <span class="material-icons-outlined fs-6">
                    close
                </span>
            </button>
            <ButtonSpaceMember :idSpace="id"/>
        </div>
        <form v-else method="POST" @submit.prevent="doneEdit">
            <input type="text" v-model="text" @blur="doneEdit()" @keyup.escape="cancelEdit()" class="input">
        </form>
    </div>
</template>

<style scoped>
.input {
    border: 1px solid rgba(0, 0, 0, 0.204);
}

.hover button {
    opacity: 0;
}

.hover:hover button {
    opacity: 1;
}
</style>