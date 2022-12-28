<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from "../../store/user.js";
import { getAuth, signOut } from '@firebase/auth';
import CreateBoard from '../DashBoard/CreateBoard.vue';
import router from '../../router/index.js';
import { doc, updateDoc } from '@firebase/firestore';
import { db } from '../../utils/firebase.js';

const user = useUserStore()

function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {

        const taskCollection = doc(db, "user_friend", user.usuario.uid);

        updateDoc(taskCollection, {
            online: false
        });

        user.usuario = null;

        router.push('/')
    }).catch((error) => {

    });
}


</script>
<template>
    <nav class="navbar navbar-expand-lg bg-light px-0 px-md-2">
        <div class="container-fluid">
            <RouterLink to="" class="me-3">
                <img src="../../assets/Images/letraGrab.png" alt="Letra de GRAB">
            </RouterLink>

            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="material-icons-outlined text-light">
                    menu
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="nav-link text-light fw-bold" to="/">
                            Home
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link text-light fw-bold" to="/dashboard">
                            Dashboard
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink class="nav-link text-light fw-bold" to="/contact">
                            Contact
                        </RouterLink>
                    </li>
                </ul>
                <div class=" d-flex align-items-center">
                    <RouterLink to="/login"
                        class="nav-link text-light fw-bold fs-7 me-4 bg-dark px-5 py-2 rounded-2 hover"
                        v-if="!user.existeUsuario">
                        <div class="d-flex align-items-center">
                            <span class="material-icons-outlined me-2">
                                login
                            </span>
                            <p class="m-0">Login</p>
                        </div>
                    </RouterLink>
                    <div v-if="user.existeUsuario" class="d-flex gap-3 align-items-center ">
                        <button type="button"
                            class="bg__icon btn d-flex gap-2 align-items-center btn-sm btn-light text-danger widthButton fw-bold shadow btn-danger"
                            @click.prevent="signout()">
                            <span class="material-icons-outlined">
                                logout
                            </span>
                            <p class="m-0">Log out</p>
                        </button>
                        <img :src="user?.usuario?.photoURL" :alt="user?.usuario?.displayName"
                            class="rounded-circle width">
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
<style scoped>
a:hover {
    color: #ffb703;
}

.bg__icon p {
    transform: translateX(-.6rem);
}

.router-link-active {
    color: #ffb703 !important;
}

.bg__icon span {
    opacity: 0;
    transition: .3s linear;
    transform: translateX(0);
}

.bg__icon:hover span {
    opacity: 1;
    transition: .3s linear;
    transform: translateX(-3px);

}

.hover p {
    transform: translateX(-.8rem);
}

.hover span {
    opacity: 0;
    transition: .2s;
}

.hover:hover span {
    opacity: 1;
    transition: .4s;
    transform: translateX(-1rem);
}


.navbar {
    background-color: #023047 !important;
    min-height: 64px;
}

.contenedor-botones {
    height: 7vh;

}

.navbar img:nth-child(1) {
    height: 1rem;
    padding-left: 1rem;
}

.widthButton {
    width: 110px;
}

.width {
    width: 2rem;
}
</style>