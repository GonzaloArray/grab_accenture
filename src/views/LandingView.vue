<script setup>

import { onAuthStateChanged } from '@firebase/auth';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../store/user';
import { auth } from '../utils/firebase';
import FooterApp from '../components/FooterApp.vue';

const user = useUserStore();

onAuthStateChanged(auth, (user1) => {

    user.addUsuario(user1);

});

</script>
<template>
    <div class="contenedor-principal">
        <div class="seccion primera-seccion">
            <div class="segundo-div flex-wrap d-flex align-items-center justify-content-around">
                <div class="col-md-4 p-2">
                    <p class="">The site to organize your <br> tasks in a simple way</p>
                </div>
                <div class="col-md-4 d-flex flex-column align-items-center p-2">
                    <p>Start writing <br>your homework</p>
                    <RouterLink to="/login">
                        <button class="btn px-4 py-2 d-flex justify-content-center align-items-center gap-2 hover">
                            <p class="m-0 fs-4">TRY NOW</p>
                            <span class="material-icons-outlined">
                                east
                            </span>
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
        <div class="seccion segunda-seccion">
            <div class="d-flex align-items-center flex-column gap-3 col-md-4">
                <div class="d-flex align-items-center gap-3">
                    <h2 class="mb-0">USE</h2>
                    <img src="../assets/Images/letraGrab.png" alt="" class="letraGrab">
                </div>
                <div class="d-flex justify-content-center align-items-center text-center mt-5">
                    <p>Do you want to have your tasks organized? <br>Here you can put your tasks in order, with
                        completion day.</p>
                </div>
            </div>
            <div class="d-flex justify-content-center align-items-center text-center flex-column pb-1 col-md-4">
                <p class="text-yellow">GRAB's HISTORY</p>
                <span class="material-icons-outlined text-yellow">south</span>
            </div>
        </div>
        <div class="seccion tercera-seccion">
            <div class="d-flex flex-column align-items-center justify-content-center col-md-4">
                <h2 class="mb-3 text-center">LEAVING BEHIND</h2>
                <p class="text-center">Trying to change the blackboards, boards, papers.</p>
            </div>
            <div class="col-md-4">
                <img src="../assets/Images/landing1.png" alt="">
            </div>
        </div>
        <div class="seccion cuarta-seccion">
            <div class="col-md-4">
                <img src="../assets/Images/landing2.png" alt="">
            </div>
            <div class="d-flex flex-column align-items-center justify-content-center col-md-4">
                <h2 class="mb-3">PLAN</h2>
                <p class="text-center">We invite you to share your <br>pending tasks with your coworkers.</p>
            </div>
        </div>
        <div class="seccion quinta-seccion">
            <div class=" d-flex flex-column align-items-center justify-content-center col-md-5">
                <img src="../assets/Images/landing2.5.png" alt="">
                <h2 class="mb-3 text-center">IDEAS IN COMUNITY</h2>
                <p class="text-center">Let your team shoot a rain and organize them.</p>
            </div>
        </div>
        <div class="seccion sexta-seccion">
            <div class="d-flex flex-column align-items-center justify-content-center col-md-4">
                <h2 class="mb-3 text-center">MORE CONFORT</h2>
                <p class="text-center">Create your project, place your work area and coordinate with your colleagues.
                </p>
            </div>
            <div class="col-md-4">
                <img src="../assets/Images/grab.jpg" alt="Construccion">
            </div>
        </div>
        <div class="seccion septima-seccion">
            <div class="primer-div col-md-8">
                <h2 class="mb-0">ADVANTAGES OF USING<img class="width" src="../assets/Images/letraGrab.png" alt=""></h2>
            </div>
            <div class="segundo-div ">
                <div class="d-flex flex-column  col-md-3">
                    <h2>ORGANIZE</h2>
                    <p>Keep an order of your meeting schedules and objectives, their summary and all the notes and
                        documents that you wish to attach.</p>
                </div>
                <div class="d-flex flex-column  col-md-3">
                    <h2>CHECK</h2>
                    <p>With GRAB boards it is possible to keep the team within the assigned tasks, control the process
                        and respect deadlines, especially if you work by sprints.</p>
                </div>
                <div class="d-flex flex-column  col-md-3">
                    <h2>EASE</h2>
                    <p>With GRAB it is possible to work with teams from different parts of the world in a collaborative
                        and empathetic way while maintaining a good working relationship.</p>
                </div>
            </div>
        </div>
        <div class="seccion octava-seccion">
            <img src="../assets/Images/logoGrab.png" alt="">
            <h2>ALL THE WORK OF YOUR TEAM IN ONE PLACE.</h2>
            <RouterLink to="/login">
                <button class="btn d-flex justify-content-center align-items-center gap-2 hover">
                    <span>TRY NOW</span>
                    <span class="material-icons-outlined">
                        east
                    </span>
                </button>
            </RouterLink>
        </div>
        <div class="seccion novena-seccion">
            <div class="col-md-5 d-flex flex-column justify-content-around align-items-center">
                <h2>With GRAB PREMIUM, you'll get everything you love about our free version, plus:</h2>
                <button class="btn d-flex justify-content-center align-items-center gap-2 hover">
                    <span>PREMIUM</span>
                    <span class="material-icons-outlined">
                        east
                    </span>
                </button>
            </div>
            <div class="col-md-5 d-flex flex-column justify-content-around align-items-center gap-3">
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <span class="material-icons-outlined icono">history</span>
                    </div>
                    <div class="w-75 d-flex justify-content-center">
                        <h3>TASK HISTORY</h3>
                    </div>
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <span class="material-icons-outlined icono">timer</span>
                    </div>
                    <div class="w-75 d-flex justify-content-center">
                        <h3>CHRONOMETER</h3>
                    </div>
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <span class="material-icons-outlined icono">style</span>
                    </div>
                    <div class="w-75 d-flex justify-content-center">
                        <h3>TAGS PERSONALIZATION</h3>
                    </div>
                </div>
                <div class="w-100 d-flex align-items-center justify-content-between">
                    <div>
                        <span class="material-icons-outlined icono">format_color_fill</span>
                    </div>
                    <div class="w-75 d-flex justify-content-center">
                        <h3>BOARD PERSONALIZATION</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <FooterApp />
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

.width {
    width: 15rem !important;
}

.hover:hover {
    background-color: rgb(2, 33, 98) !important;
    transition: .4s linear;
}

.hover span {
    transition: .2s linear;
}

.hover:hover span {
    transform: translateX(10px);
    transition: .2s linear;
}

.contenedor-principal {
    width: 100%;
}

.seccion {
    width: 100%;
    height: 90vh;
}

.primera-seccion {
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(rgba(0, 149, 186, 0.7), rgba(0, 149, 186, 0.7)), url(https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 60%;
    width: 100%;
    height: 90vh;
}

.primera-seccion .primer-div {
    height: 25%;
    padding: 1rem;
    width: 20rem;
}

.primera-seccion .segundo-div {
    padding: 1rem;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.primera-seccion .segundo-div p {
    font-family: 'Montserrat', sans-serif;
    font-size: 4vmax;
    font-weight: 600;
    /* color: #260669; */
    color: white;
    text-shadow: 2px 2px 2px #250669;
    text-align: center;
}

.primera-seccion .segundo-div button {
    border-radius: 2rem;
    background-color: var(--primary);
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

button .material-icons-outlined {
    background-color: white;
    border-radius: 50%;
    color: #260669;
}

.primera-seccion .letraGrab {
    width: 100%;

}

.segunda-seccion {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    background-image: radial-gradient(circle at 37.72% -19.64%, #5f627f 0, #00214d 50%, #000022 100%);
    width: 100%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding-top: 10rem;
}

.segunda-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    color: white;
    font-weight: bold;
    font-size: 3rem;
}

.segunda-seccion .letraGrab {
    width: 10rem;
}

.segunda-seccion p {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.segunda-seccion .text-yellow {
    color: #ffb703;
}

.tercera-seccion {
    background-image: radial-gradient(circle at 43.84% 120.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.tercera-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    color: #ffb703;
    font-weight: bold;
    font-size: 3rem;
}

.tercera-seccion p {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.tercera-seccion img {
    width: 100%
}

.cuarta-seccion {
    background-image: radial-gradient(circle at 43.84% -20.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: space-around;
    align-items: center;
}

.cuarta-seccion img {
    width: 100%;
}

.cuarta-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    color: #ffb703;
    font-weight: bold;
    font-size: 3rem;
}

.cuarta-seccion p {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.quinta-seccion {
    background-image: radial-gradient(circle at 43.84% 120.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.quinta-seccion img {
    width: 100%;
}

.quinta-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    color: #ffb703;
    font-weight: bold;
    font-size: 3rem;
}

.quinta-seccion p {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.sexta-seccion {
    background-image: radial-gradient(circle at 43.84% -20.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.sexta-seccion img {
    width: 100%;
}

.sexta-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3.5rem;
    font-weight: 600;
    color: #ffb703;
    font-weight: bold;
    font-size: 3rem;
}

.sexta-seccion p {
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
}

.septima-seccion {
    background-image: radial-gradient(circle at 43.84% 120.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.septima-seccion .primer-div {
    display: flex;
    flex-wrap: wrap;
    height: 25%;
    padding: 1rem;
}

.septima-seccion .primer-div h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #ffb703;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.septima-seccion .primer-div img {
    width: 50%;
    padding: 2rem;
}

.septima-seccion .segundo-div {
    padding: 1rem;
    padding-top: 5rem;
    height: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}

.septima-seccion .segundo-div h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    color: #ffb703;
    text-align: center;
}

.septima-seccion .segundo-div p {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8vmax;
    color: white;
    font-weight: bold;
    text-align: center;
    padding-top: 1rem;
}

.octava-seccion {
    background-image: radial-gradient(circle at 43.84% -20.44%, #5f627f 0, #00214d 50%, #000022 100%);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}

.octava-seccion img {
    width: 17rem;
}

.octava-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3vmax;
    font-weight: bold;
    color: #ffb703;
    text-align: center;
}

.octava-seccion button {
    background-color: #ffb703;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
}

.novena-seccion {
    font-family: 'Montserrat', sans-serif;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(../assets/Images/landing3.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0% 60%;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
}

.novena-seccion h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 3vmax;
    font-weight: bold;
    color: #ffb703;
    text-align: center;
}

.novena-seccion h3 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5vmax;
    font-weight: bold;
    color: #ffb703;
    text-align: center;
    margin: 0;
}

.novena-seccion button {
    background-color: #ffb703;
    border-radius: 2rem;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    margin-top: 1rem;
}

.novena-seccion .icono {
    color: white;
    font-size: 4rem;
}

a {
    text-decoration: none;
}

@media screen and (max-width: 60rem) {
    .primera-seccion {
        background-image: linear-gradient(rgb(0, 149, 186), rgb(0, 149, 186)), url(https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg);
    }
}
</style>