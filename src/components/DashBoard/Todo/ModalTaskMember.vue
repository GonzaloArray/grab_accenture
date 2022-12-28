<script setup>
import { addDoc, collection, onSnapshot } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { useUserRegister } from "../../../store/Dashboard/Space/useRegister";
import { useReadBoard } from "../../../store/useReadBoard";
import { db } from "../../../utils/firebase";

const useSpace = useReadBoard();
const userRegister = useUserRegister();

const route = useRoute();
const routeId = route.params.id;


const tableroCollection = collection(db, 'user_friend')

function handleAdd(item) {
    addDoc(tableroCollection, {
        name: item.name,
        photoURL: item.photoURL,
        id: crypto.randomUUID(),
        uid: item.uid,
        date: Date.now(),
        idBoard: routeId,
        online: item.online
    });
}

</script>

<template>
    <section class="bg-light px-2 mt-2 rounded-1 shadow z-index position-absolute width">
        <div>
            <h2 class="fs-6 p-2">Members</h2>
            <div v-for="user in userRegister.arrayUser" :key="user.idUser"
                class="py-2 bg-light border-bottom d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center gap-1">
                    <img class="img-width rounded-circle" :src="user.photoURL" :alt="user.name">
                    <h2 class="fs-per">{{ user.name }}</h2>
                </div>
                <button @click.prevent="handleAdd(user)" class="btn btn-sm btn-success fs-per">
                    Add user
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.width {
    width: 250px !important;
}

.img-width {
    width: 1.5rem;
}

.fs-per {
    font-size: 11px;
}

.z-index {
    z-index: 2;
}
</style>