<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
  <div class="todo">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-3">
          <div class="text-center mt-5">
            <img class="logo" src="../assets/Images/logoGrab.png" alt=" logo">
            <img class="brand" src="../assets/Images/letraGrab.png" alt="brand">
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3 mt-3 ">
          <div class="card border-0" style="width: 18rem;">
            <RouterLink to="/about">
              <div class="card-body">
                <h5 class="card-title">About GRAB</h5>
                <p class="card-subtitle mb-2 text-muted">What's behind the board</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3 mt-3">
          <div class="card border-0" style="width: 18rem;">
            <RouterLink to="/work">
              <div class="card-body">
                <h5 class="card-title">Employment</h5>
                <p class="card-subtitle mb-2 text-muted">Consult the vacancies in our team</p>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-3 mt-3">
          <div class="card border-0" style="width: 18rem;">
            <RouterLink to="/contact">
              <div class="card-body">
                <h5 class="card-title">Contact</h5>
                <p class="card-subtitle mb-2 text-muted">You need something? Contact us and we will help you</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <hr class="raya mx-auto">
    <div class="container-fluid">
      <div class="row fs-6">

        <div class="col-xs-12 col-md-6 col-lg-4 text-center text-white mb-3">
          <RouterLink to="/politic">
            <p class="lo text-white">Politics</p>
          </RouterLink>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4 text-center text-white mb-3">
          <RouterLink to="/terms">
            <p class="lo text-white">Terms of use</p>
          </RouterLink>
        </div>
        <div class="col-xs-12 col-md-6 col-lg-4 text-center mb-3">
          <i class="icono me-3"><img src='../assets/Images/logoFacebook.svg' alt="face"></i>
          <i class="icono me-3"><img src="../assets/Images/logoInsta.svg" alt="insta"></i>
          <i class="icono me-3"><img src="../assets/Images/logoLink.svg" alt="link"></i>
          <i class="icono me-3"><img src="../assets/Images/logoTwiter.svg" alt="twit"></i>
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
}

h5 {
  font-family: var(--font-title);
}

p {
  font-family: var(--font-text)
}

.todo {
  background-color: #023047;
}

.logo {
  height: 2rem;
}

.brand {
  height: 1rem;
}

.card-body {
  background-color: #023047;
  color: white;
}

.card-body:hover {
  opacity: 0.8;

}

.menu {
  text-decoration: none;
}

hr {
  width: 97%;
}

.raya {
  color: white;
}
</style>