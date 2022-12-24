<script setup>
</script>
<template>
<div class="todo">
    <div class="seccionA d-flex justify-content-evenly pb-5 pt-3">
        <div>
            <h2 class="text-center mt-5">Contact our sales team</h2>
            <div class="card mt-3 ">
                <div class="card-body">
                    <div class="row">
                        <div class="col">
                            <label for="inputName">Name</label>
                            <input type="text" class="form-control" id="inputName" placeholder="First name"
                                aria-label="First name">
                        </div>
                        <div class="col">
                            <label for="inputName">Last Name</label>
                            <input type="text" class="form-control" placeholder="Last name" aria-label="Last name">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Write yuor message</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
                    </div>

                    <a href="#"
                        class="btn btn-primary mt-2 position-absolute bottom-2 start-100 translate-middle">Submit</a>
                </div>
            </div>
        </div>
        <div>
            <img class="dibujo mt-5" src="../assets/Images/imagenContacto.png" alt="telefono">
            <div class="card" style="width: 18rem;">
  <div class="card-body">
    <p class="card-text text-center mx-auto">Do you need information about our premium options?</p>
    <p class="card-text mx-2">Send us your information and a GRAB representative will contact you shortly.</p>
  </div>
</div>
            </div>
            </div>
            
            <div class="seccionB pt-5">
                <div class="card mb-3 mx-auto" style="width:70%">
                    <div class="row g-0">
                        <div class="col-md-4 mx-auto my-auto text-center">
                            <img src="../assets/Images/logoGrab.png" class="logo img-fluid rounded-start" alt="logo">
                            <img src="../assets/Images/letraGrab.png" class="brand img-fluid rounded-start" alt="brand">
                        </div>
                        <div class="caja col-md-8 text-center">
                            <div class="card-body ">
                                <h5 class="card-title">Contact Us</h5>
                                <p class="card-text">(+54)387 456 7890</p>
                                <p class="card-text">Country: Argentina (World Champion)</p>
                                <p class="card-text">grab@gmail.com</p>
                                <span></span>
                                <div class="col-xs-12 col-md-6 col-lg-4 mb-3 mx-auto">
                                    <i class="icono me-3"><img src='../assets/Images/logoFacebook.svg' alt="face"></i>
                                    <i class="icono me-3"><img src="../assets/Images/logoInsta.svg" alt="insta"></i>
                                    <i class="icono me-3"><img src="../assets/Images/logoLink.svg" alt="link"></i>
                                    <i class="icono me-3"><img src="../assets/Images/logoTwiter.svg" alt="twit"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
</template>
<style scoped>
.todo{
    max-height: 90vh;
}
h2{ 
    font-family: var(--font-title  ) 
}


.btn {
    background-color: #fbb703;
    border-style: none;
}

input,
textarea {
    border-radius: 0.7rem;
    background-color: darkslategray;
    border-color: darkslategray;
}

.seccionA {
    margin-top:4rem;
    background-color: #023047;
    color: white;
    font-family: var(--font-text);
}

.seccionB {
    background-color: #023047;
    color: white;
    font-family: var(--font-text);
}

.dibujo {
    width: 300px;
    height: 200px;
}

.card {
    width: 100%;
    border-style: none;
}

.card-body {
    color: white;
    background-color: #023047;


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