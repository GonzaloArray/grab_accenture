<script setup>
import { logOut } from '../firebase/auth.js';
</script>
<template>
    <!-- <button @click="logOut">Salir</button> -->
    <div class="container-fluid">
        <div class="d-flex flex-wrap keep row">
        <div class="d-flex flex-column" >
            <h2>Keep yours tasks in order.</h2>
            <p>From small details to large-scale initiatives, GRAB organizes work so teams know what needs to be done, why their work is important, and how they need to proceed to get it done.</p>
        </div>
        <div>
            <img src="https://img.freepik.com/vector-premium/pizarra-tareas-desarrollador-sigue-progreso-lista-tareas-prioritarias-monte-tablero-blanco-pared-organizacion-cronograma-planificacion-scrum-plan-equipo-lluvia-ideas-ordenada-ilustracion-vectorial_81894-7946.jpg?w=2000" alt="">
        </div>
    </div>
    <div class="d-flex flex-wrap stay">
        <div class="d-flex flex-column">
            <h2>Stay organized and connected.</h2>
            <p>Gather all the team's work in a shared space.</p>
        </div>
        <div>
            <img src="https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg" alt="">
        </div>
    </div>
    </div>
    
</template>
<style scoped>
.keep div:nth-child(2) img{
    width: 100%;
}
.stay div:nth-child(2) img{
    width: 100%;
}
</style>