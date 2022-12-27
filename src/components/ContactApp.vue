<script setup>
import { ref } from '@vue/reactivity'
import Swal from 'sweetalert2'

const name = ref('')
const lastName = ref('')
const email = ref('')
const msj = ref('')

function handleSubmit() {
    if (name !== "" || lastName !== "" || email !== "" || msj !== "") {
        Swal.fire(
            'Thank you for using grab!',
            'Your message was sent successfully!',
            'success'
        )
    }
}

</script>
<template>
    <div class="todo">
        <div class="seccionA d-flex justify-content-evenly flex-wrap px-2 pb-5">
            <div>
                <h2 class="text-center mt-5">Contact our sales team</h2>
                <div class="card mt-3 shadow-lg rounded">
                    <form class="card-body" method="POST" @submit.prevent="handleSubmit">
                        <div class="row">
                            <div class="col">
                                <label for="inputName">Name</label>
                                <input v-model="name" type="text" class="form-control" id="inputName"
                                    placeholder="First name" aria-label="First name">
                            </div>
                            <div class="col">
                                <label for="inputName">Last Name</label>
                                <input v-model="lastName" type="text" class="form-control" placeholder="Last name"
                                    aria-label="Last name">
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Write yuor message</label>
                            <textarea v-model="msj" class="form-control" id="exampleFormControlTextarea1"
                                rows="2"></textarea>
                        </div>

                        <input type="submit" value="Submit" class="btn btn-primary mt-2">
                    </form>
                </div>
            </div>
            <div>
                <img class="dibujo mt-5" src="../assets/Images/imagenContacto.png" alt="telefono">
                <div class="card shadow-lg rounded" style="width: 18rem;">
                    <div class="card-body">
                        <p class="card-text text-center mx-auto">Do you need information about our premium options?</p>
                        <p class="card-text mx-2">Send us your information and a GRAB representative will contact you
                            shortly.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="seccionB p-3">
            <div class="row">
                <div class="col-12 col-md-4 mx-auto my-auto text-center">
                    <img src="../assets/Images/logoGrab.png" class="logo img-fluid rounded-start" alt="logo">
                    <img src="../assets/Images/letraGrab.png" class="brand img-fluid rounded-start" alt="brand">
                </div>
                <div class="caja col-12 col-md-4 mt-2 mt-md-0 text-center">
                    <h5 class="card-title">Contact Us</h5>
                    <p class="card-text">(+54)387 456 7890</p>
                    <p class="card-text">Country: Argentina (World Champion)</p>
                    <p class="card-text">grab@gmail.com</p>
                    <span></span>
                </div>
                <div class="col-12 text-center col-lg-4 mb-3 mx-auto mt-3">
                    <i class="icono me-3 fs-4"><img src='../assets/Images/logoFacebook.svg' alt="face"></i>
                    <i class="icono me-3"><img src="../assets/Images/logoInsta.svg" alt="insta"></i>
                    <i class="icono me-3"><img src="../assets/Images/logoLink.svg" alt="link"></i>
                    <i class="icono me-3"><img src="../assets/Images/logoTwiter.svg" alt="twit"></i>
                </div>
            </div>
        </div>
    </div>


</template>
<style scoped>
h2 {
    font-family: var(--font-title)
}

.btn {
    background-color: #fbb703;
    border-style: none;
}

input,
textarea {
    border-radius: 0.7rem;
    border-color: darkslategray;
}

@media (min-width: 768px) {
    .seccionA {
        background-color: #023047;
        background-image: radial-gradient(circle at 37.72% -19.64%, #5f627f 0, #00214d 50%, #000022 100%);
        color: white;
        font-family: var(--font-text);
        height: 72svh;
    }
}

.seccionA {
    background-color: #023047;
    background-image: radial-gradient(circle at 37.72% -19.64%, #5f627f 0, #00214d 50%, #000022 100%);
    color: white;
    font-family: var(--font-text);
}

.seccionB {

    background-color: #023047;
    color: white;
    font-family: var(--font-text);
}

@media (min-width: 768px) {
    .dibujo {
        width: 300px;
        height: 200px;
    }
}

.dibujo {
    width: 80%;
    max-width: 300px;
    height: 200px;
}

.card {
    width: 100%;
    border-style: none;
    background-color: #023047;
    border-radius: 5rem;
}

.card-body {
    color: white;
    background-color: #023047;
    border-radius: 1rem;


}

.row {
    background-color: #023047;
}

.logo {
    height: 4rem;
}

.brand {
    height: 2rem;
}
</style>