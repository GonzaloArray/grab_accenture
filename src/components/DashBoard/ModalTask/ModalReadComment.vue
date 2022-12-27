<script setup>
import { collection, doc, onSnapshot, query, updateDoc, where } from "@firebase/firestore";
import { computed, ref } from "@vue/runtime-core";
import { db } from "../../../utils/firebase";
import MenuReadCommentButton from "./Button/MenuReadCommentButton.vue";

const props = defineProps({
    idTask: String
})
const arrayComment = ref(null);
const editModal = ref(false);

const nameCollection = collection(db, 'comment')

const status = computed(() => {
    const todoCollectionQuery = query(nameCollection, where("idTask", "==", props.idTask));

    onSnapshot(todoCollectionQuery, (querySnapshot) => {
        const frPost = [];

        querySnapshot.forEach((doc) => {
            const todo = {
                id: doc.data().id,
                comment: doc.data().text,
                date: doc.data().date,
                idComment: doc.id,
                idUser: doc.data().idUser,
                photoURL: doc.data().photoURL,
                displayName: doc.data().displayName,

            }

            frPost.push(todo)

        });

        arrayComment.value = frPost;
        arrayComment.value.sort((a,b) => b.date - a.date)
    });
})

function handleModal(valor) {
    editModal.value = valor;
}

function handleEdit(id, comment) {
    const taskCollection = doc(db, "comment", id);

    updateDoc(taskCollection, {
        text: comment
    });


    editModal.value = false;
}
</script>

<template>
    {{ status }}
    <section class="px-2">
        <div v-for="comment in arrayComment" :key="comment.id"
            class="position-relative rounded-1 p-3 shadow bg__comment mt-3">
            <div class="d-flex mb-2 gap-2">
                <img class="width rounded-circle" :src="comment.photoURL" :alt="comment.displayName">
                <h2 class="fs-7">{{ comment.displayName }}</h2>
            </div>
            <form v-if="editModal" method="POST" @submit.prevent="handleEdit(comment.idComment, comment.comment)">
                <input class="border" type="text" @blur="handleEdit(comment.idComment, comment.comment)" v-model="comment.comment">
            </form>
            <h2 v-else class="fs-6">{{ comment.comment }}</h2>
            <MenuReadCommentButton @edit-comment="handleModal" :id="comment.idComment" />
        </div>
    </section>
</template>

<style scoped>
.border{
    border: 1px solid #00000031;
}
.bg__comment {
    background-color: #FFFFFF;
}

.width {
    width: 2rem;
}
</style>