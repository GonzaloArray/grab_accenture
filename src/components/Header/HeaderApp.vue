<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from "../../store/user.js";
import { getAuth, signOut } from '@firebase/auth';

const user=useUserStore()
console.log(user.existeUsuario);

function signout() {
    const auth = getAuth();
    signOut(auth).then(() => {
        alert("deslogueado")
    }).catch((error) => {

    });
}


</script>
<template>
    <nav class="navbar d-flex justify-content-between shadow">
        <div class="d-flex align-items-center gap-3">
            <RouterLink to="/landing" class="me-3">
                <img src="../../assets/Images/letraGrab.png" alt="Letra de GRAB">
            </RouterLink>
            <RouterLink class="btn btn-primary" to="/">
                Home
            </RouterLink>
            <RouterLink class="btn btn-warning" to="/dashboard">
                Dashboard
            </RouterLink>
        </div>
        <div class="contenedor-botones d-flex justify-content-between align-items-center">
            <RouterLink to="/login">
                <button class="btn bg-white" v-if="!user.existeUsuario">
                    Log In GRAB
                </button>
            </RouterLink>
            <button class="btn btn-danger" v-if="user.existeUsuario" @click="signout()">
                Log Out
            </button>
            <button class="btn btn-premium rounded-0">
                <img src="../../assets/Images/logoGrab.png" alt="">
                <span>PREMIUM</span>
            </button>
        </div>
    </nav>

</template>
<style scoped>
.navbar {
    width: 100%;
    background-color: #023047;
    padding: 0 0;
    max-height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-height: 10vh;
}
.contenedor-botones{
    width: 22rem;
    height: 10vh;
}

.navbar img:nth-child(1) {
    height: 1rem;
    padding-left: 1rem;
}


.btn-premium {
    background-color: var(--thrid);
    color: white;
    font-family: var(--font-title);
    font-weight: bold;
    font-size: 1.5rem;
    text-shadow: 1px 1px 1px black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* padding: .5rem;
    transform: scale(1.1) translateY(.5rem); */
    width: 12rem;
    min-height: 100%;
}
.btn-premium:hover{
    box-shadow: 0px 0px 5px 0px rgba(235,225,27,0.67)
}
.btn-premium>img{
    height: 2rem !important;
    padding-left: 0px !important;
    filter: drop-shadow(1px 1px 1px #000);
}
.offcanvas {
    max-width: 15rem;
}

.offcanvas-header {
    background-color: #023047;
    color: white;
}

.offcanvas-header img {
    height: 1rem;
}

.offcanvas-body {
    background-color: rgba(0, 0, 0, 0.489);
    color: white;
    padding-top: 0;
}

.offcanvas-body ul {
    padding-left: 0;

}

.offcanvas-body ul li {
    border-bottom: 1px solid white;
    padding: 1rem 0;
}
</style>