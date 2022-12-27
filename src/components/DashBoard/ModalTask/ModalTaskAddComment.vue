<script setup>
import { addDoc, collection } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useUserStore } from "../../../store/user";
import { db } from "../../../utils/firebase";


const user = useUserStore();

const props = defineProps({
    idTask: String
})

const comment = ref('');

const handlerSubmit = (id, text) => {
    const tableroCollection = collection(db, 'comment')

    if (text != "") {
        addDoc(tableroCollection, {
            text,
            id: crypto.randomUUID(),
            idTask: id,
            date: Date.now(),
            idUser: user?.usuario?.uid,
            photoURL: user?.usuario?.photoURL,
            displayName: user?.usuario?.displayName
        });
    }

    comment.value = "";
}

</script>

<template>
    <div class="d-flex align-items-center gap-2 mt-2">
        <span class="material-icons-outlined">
            forum
        </span>
        <h2 class="fs-5">Comments</h2>
    </div>
    <form method="POST" @submit.prevent="handlerSubmit(idTask, comment)">
        <div>
            <label for="comment">Add comment</label>
            <input name="comment" id="comment" class="form-control" type="text"
                placeholder="Ej: Hi, how are you? it's complete?" v-model="comment">
        </div>
    </form>
</template>

<style scoped>

</style>