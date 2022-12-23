<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from "../../store/user.js";
import { getAuth, signOut } from '@firebase/auth';
import ButtonPremiun from '../Premiun/ButtonPremiun.vue';
import CreateBoard from '../DashBoard/CreateBoard.vue';

const user = useUserStore()

function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert("deslogueado")
    }).catch((error) => {

    });
}


</script>
<template>
    <nav class="navbar d-flex justify-content-between shadow px-3">
        <div class="d-flex align-items-center gap-3 text-light fs-7">
            <RouterLink to="/landing" class="me-5 mt-0">
                <img src="../../assets/Images/letraGrab.png" alt="Letra de GRAB">
            </RouterLink>
            <RouterLink class="nav-link fw-bold" to="/">
                Home
            </RouterLink>
            <RouterLink class="nav-link fw-bold" to="/dashboard">
                Dashboard
            </RouterLink>
            <RouterLink class="nav-link fw-bold" to="/contact">
                Contact
            </RouterLink>
            <CreateBoard />
        </div>
        <div class=" d-flex align-items-center">
            <RouterLink to="/login" class="nav-link text-light fw-bold fs-7 me-4 bg-dark px-5 py-2 rounded-2 hover"
                v-if="!user.existeUsuario">
                <div class="d-flex align-items-center">
                    <span class="material-icons-outlined me-2">
                        login
                    </span>
                    <p class="m-0">Login</p>
                </div>
            </RouterLink>
            <button class="btn btn-danger" v-if="user.existeUsuario" @click="signout()">
                Log Out
            </button>
            <ButtonPremiun href="" icon="dashboard" text="Grab premiun" />
            <!-- <button class="btn btn-premium rounded-0">
                <img src="../../assets/Images/logoGrab.png" alt="">
                <span>PREMIUM</span>
            </button> -->
        </div>
    </nav>

</template>
<style scoped>
a:hover {
    color: #ffb703;
}

.router-link-active {
    color: #ffb703;
}
.hover p{
    transform: translateX(-.8rem);
}
.hover span{
    opacity: 0;
    transition: .2s;
}
.hover:hover span {
    opacity: 1;
    transition: .4s;
    transform: translateX(-1rem);
}
.hover:hover {
    background-color: #ffb703 !important;
}

.navbar {
    width: 100%;
    background-color: #023047;
    padding: 0 0;
    max-height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 8vh;
}

.contenedor-botones {
    height: 7vh;
}

.navbar img:nth-child(1) {
    height: 1rem;
    padding-left: 1rem;
}
</style>