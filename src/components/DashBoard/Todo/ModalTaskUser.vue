<script setup>
import { collection, deleteDoc, doc, onSnapshot, query, where } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useUserStore } from "../../../store/user";
import { db } from "../../../utils/firebase";

const user = useUserStore()

const arrayUser = ref([]);

const props = defineProps({
    idTask: String
})

const nameCollection = collection(db, 'user_friend')
const userAssign = computed(() => {

    const todoCollectionQuery = query(nameCollection, where("idTask", "==", props?.idTask));

    onSnapshot(todoCollectionQuery, (querySnapshot) => {
        const frPost = [];


        querySnapshot.forEach((doc) => {

            const todo = {
                name: doc.data().name,
                photoURL: doc.data().photoURL,
                id: doc.data().id,
                uid: doc.data().uid,
                date: doc.data().date,
                idBoard: doc.data().idBoard,
                online: doc.data().online,
                idUser: doc.id
            }

            frPost.push(todo)

        });

        arrayUser.value = frPost;
    });
})



const handleDelete = async (id) => {
    await deleteDoc(doc(nameCollection, id));
}

</script>
<template>
    {{ userAssign }}
    <section class="d-flex align-items-center gap-2 py-2">
        <div v-for="user in arrayUser" :key="user?.id"
            class="bg-light my-3 ms-2 card rounded-circle  position-relative hover"
            :class="user?.online && 'loader'">
            <div class="position-relative">
                <div class="face">
                </div>
                <img :src="user?.photoURL" class="width rounded-circle" alt="Escudo Premiun">

            </div>
            <button type="button" class="position-absolute end-0 start-0 bottom-0 top-0 btn rounded-pill text-light"
                @click.prevent="handleDelete(user?.idUser)">
                <span class="material-icons-outlined fs-7">
                    close
                </span>
            </button>
        </div>
    </section>
</template>
<style scoped>
.width {
    width: 2.3rem;
}

.hover button {
    display: none;
}

.hover:hover button {
    display: block;
    background-color: #0000005d;
    transition: .4s linear;
}

:root {
    --card-height: 65vh;
    --card-width: calc(var(--card-height) / 1.5);
}

.bg__online {
    background: #33ff14d3 !important;

}

.loader .face .circle {
    position: absolute;
    width: 50%;
    height: 0.1em;
    top: 50%;
    left: 50%;
    background-color: transparent;
    transform: rotate(var(--deg));
    transform-origin: left;
}

.loader .face .circle::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em,
        0 0 4em, 0 0 6em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate023945 {
    to {
        transform: rotate(1turn);
    }
}

.loader {
    width: 2em;
    height: 2em;
    font-size: 17px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.loader .face {
    position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: animate023945 3s linear infinite;
}

.loader .face:nth-child(1) {
    width: 100%;
    height: 100%;
    color: rgb(0, 255, 0);
    border-color: currentColor transparent transparent currentColor;
    border-width: 0.2em 0.2em 0em 0em;
    --deg: -45deg;
    animation-direction: normal;

}

</style>
