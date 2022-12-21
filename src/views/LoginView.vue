<script setup>
import { RouterLink } from 'vue-router';
import { register, login, loginGoogle, loginFacebook, loginGitHub } from '../firebase/auth.js'
</script>
<template>
    <div class="container-fluid d-flex">
        <div class="imagenes-login">
            <img src="../assets/Images/imgLogin1.png" alt="" class="imglogin1 ">
        </div>
        <div class="container d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex justify-content-center align-items-center imagenes rounded-2">
                <img src="../assets/Images/logoGrab.png" alt="Logo de GRAB">
                <img src="../assets/Images/letraGrab.png" alt="Letras de GRAB">
            </div>
            <form class="d-flex flex-column justify-content-center align-items-center bg-white rounded-2 form-principal mb-3">
                <h4 >Log in to GRAB</h4>
                <form class="d-flex flex-column justify-content-center align-items-center">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="emailAddress" requiered>
                        <label for="emailAddress" class="text-muted">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="passLogin" required>
                        <label for="passLogin" class="text-muted">Password</label>
                    </div>
                    <button class="btn btn-success">Continue</button>
                </form>
                <span class="mb-3">OR</span>
                <button class="btn mb-2 d-flex align-items-center" @click="loginGoogle"><img
                        src="../assets/Images/logoGoogle.svg" alt="Logo de Google" class="me-1">Continue with
                    Google</button>
                <button class="btn mb-2 d-flex align-items-center"><img src="../assets/Images/logoFacebook.svg"
                        alt="Logo de Facebook" class="me-1">Continue with Facebook</button>
                <button class="btn mb-2 d-flex align-items-center"><img src="../assets/Images/logoGitHub.svg"
                        alt="Logo de GitHub" class="me-1">Continue with GitHub</button>
                <div class="separador"></div>
                <p>Are you not registered?</p>
                <RouterLink to="/register">
                    Sign up to create an account
                </RouterLink>
            </form>
        </div>
        <div class="imagenes-login">
            <img src="../assets/Images/imgLogin2.png" alt="" class="imglogin2">
        </div>
    </div>
</template> 
<style scoped>
.imagenes {
    margin: 1rem 0;
    gap: 1rem;
    background-color: rgba(0, 0, 0, 0.299);
    padding:.5rem 1rem ;
}
.imagenes-login{
    display: flex;
    align-items: flex-end;
}
.imglogin1{
    width: 100%;
}
.imglogin2{
    width: 100%;
}
.imagenes img:nth-child(1) {
    height: 4rem;
    filter: drop-shadow(0px 0px 10px #000);
}

.imagenes img:nth-child(2) {
    height: 2rem;
    filter: drop-shadow(0px 0px 10px #000);
}

form {
    min-width: 20rem;
    width: 25rem;
    padding:.5rem 2rem;
}
.form-principal{
    box-shadow: 0px 0px 13px 0px rgba(0,0,0,0.75);

}
form input {
    max-width: 20rem;
    width: 18rem;
}

button {
    border: 1px solid rgba(68, 67, 67, 0.484);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.7);
}

.separador {
    border: 1px solid rgba(132, 132, 132, 0.467);
    width: 100%;
    margin: 1rem 0;
}
</style>