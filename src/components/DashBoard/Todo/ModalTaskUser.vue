<script setup>
import { collection, deleteDoc, doc, onSnapshot } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useUserStore } from "../../../store/user";
import { db } from "../../../utils/firebase";

const user = useUserStore()

const arrayUser = ref([]);

const nameCollection = collection(db, 'user_friend')

onSnapshot(nameCollection, (querySnapshot) => {
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

const handleDelete = async (id) => {
    await deleteDoc(doc(nameCollection, id));
}

</script>
<template>
    <section class="d-flex align-items-center gap-2">
        <div v-for="user in arrayUser" :key="user.id" class="bg-light my-3 ms-2 card rounded-circle position-relative hover"
            :class="user.online && 'bg__online'">
            <img :src="user.photoURL" class="escudo rounded-circle" alt="Escudo Premiun">
            <button 
                type="button"
                class="position-absolute end-0 start-0 bottom-0 top-0 btn rounded-pill text-light"
                @click.prevent="handleDelete(user.idUser)"
            >
                <span class="material-icons-outlined fs-7">
                    close
                </span>
            </button>
        </div>
    </section>
</template>
<style scoped>
.escudo {
    width: 2rem;
}
.hover button{
    display: none;
}
.hover:hover button{
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

.card {
    width: var(--card-width);
    height: var(--card-height);
    padding: 3px;
    position: relative;
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    text-align: center;
    display: flex;
    font-size: 1.5em;
    color: rgb(88 199 250 / 0%);
    cursor: pointer;
    font-family: cursive;
}

.card:hover {
    color: rgb(88 199 250 / 100%);
    transition: color 1s;
}

.card:hover:before,
.card:hover:after {
    animation: none;
    opacity: 0;
}


.card::before {
    content: "";
    width: 104%;
    height: 102%;
    border-radius: 8px;
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    position: absolute;
    z-index: -1;
    top: -1%;
    left: -2%;
    animation: spin 2.5s linear infinite;
}

.card::after {
    position: absolute;
    content: "";
    top: calc(var(--card-height) / 6);
    left: 0;
    right: 0;
    z-index: -1;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(var(--card-height) / 6));
    background-image: linear-gradient(var(--rotate), #5ddcff, #3c67e3 43%, #4e00c2);
    opacity: 1;
    transition: opacity .5s;
    animation: spin 2.5s linear infinite;
}

@keyframes spin {
    0% {
        --rotate: 0deg;
    }

    100% {
        --rotate: 360deg;
    }
}
</style>
