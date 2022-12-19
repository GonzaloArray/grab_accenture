<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar">
            <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling">
                <img src="../assets/img/logoGrab.png" alt="Logo de GRAB">
            </button>
            <img src="../assets/img/letraGrab.png" alt="Letra de GRAB">
    </nav>
    

    <div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div class="offcanvas-header">
            <img src="../assets/img/letraGrab.png" alt="">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <ul>
                <li class="d-flex align-content-center justify-content-center">
                    <span class="material-icons-outlined pe-2">
                        view_list
                    </span>
                    Tablero
                </li>
                <li class="d-flex align-content-center justify-content-center">
                    <span class="material-icons-outlined pe-2">
                        view_list
                    </span>
                    Tablero
                </li>
                <li class="d-flex align-content-center justify-content-center">
                    <span class="material-icons-outlined pe-2">
                        view_list
                    </span>
                    Tablero
                </li>
                <li class="d-flex align-content-center justify-content-center">
                    <span class="material-icons-outlined pe-2">
                        view_list
                    </span>
                    Tablero
                </li>
                <li class="d-flex align-content-center justify-content-center">
                    <span class="material-icons-outlined pe-2">
                        view_list
                    </span>
                    Tablero
                </li>
            </ul>
        </div>
    </div>
    
</template>
<style scoped>
.navbar {
    background-color: #023047;
    padding: 0 0;
    max-height: 3rem;
}
.navbar {
    display: flex;
    justify-content: flex-start ;
    align-items: centers;
    
}
.navbar img:nth-child(1){
    height: 2rem;
}
.navbar img:nth-child(2){
    height: 1rem;
    /* padding-left: 1rem; */
} 
.offcanvas{
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
    padding-top: 0 ;
}

.offcanvas-body ul {
    padding-left: 0;
    
}

.offcanvas-body ul li {
    border-bottom: 1px solid white;
    padding: 1rem 0;
}

</style>