<script setup>
import { arrayUnion, doc, updateDoc } from "@firebase/firestore";
import { useUserRegister } from "../../../store/Dashboard/Space/useRegister";
import { db } from "../../../utils/firebase";

const useRegister = useUserRegister();

const props = defineProps({
    idSpace: String
});

function handleAdd(id) {
    const taskCollection = doc(db, "space", props.idSpace);

    updateDoc(taskCollection, {
        idFriend: arrayUnion(id)
    });

}
</script>

<template>
    <div class="dropdown">
        <button class="btn btn-primary btn-sm fs-per dropdown-toggle" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Add friend
        </button>
        <ul class="dropdown-menu widt-ul">
            <li v-for="user in useRegister.arrayUser" class="py-2 dropdown-item" :key="user.id">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center gap-1">
                        <img class="width rounded-circle" :src="user.photoURL" :alt="user.name">
                        <h2 class="fs-7">{{ user.name }}</h2>
                    </div>
                    <button @click.prevent="handleAdd(user.uid)" class="btn btn-sm btn-primary fs-per">
                        add user
                    </button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.widt-ul {
    width: 250px;
}

.width {
    width: 1.3rem;
}

.fs-per {
    font-size: 11px;
}
</style>