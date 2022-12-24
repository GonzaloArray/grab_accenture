<script setup>
import { ref } from '@vue/reactivity';
import ButtomLink from './Buttom/ButtomLink.vue';
import { useSidebar } from '../../store/Sidebar/useSidebar'

const sidebar = useSidebar();

function handleModal() {

    sidebar.modal = !sidebar.modal;
}

</script>

<template >

    <aside id="sidebar" class="sidebar" :class="sidebar.modal === true && 'toggle-sidebar'">
        <button class="btn position-absolute position text-light arrow-right " :class="sidebar.modal === true && 'arrow-left'" type="button" @click="handleModal">
            <span class="material-icons-outlined fs-2">
                arrow_circle_right
            </span>
        </button>
        <ul class="sidebar-nav" id="sidebar-nav">

            <li class="nav-heading">Pages</li>
            <div>
                <ButtomLink icon="home" title="Home" href="" />
                <ButtomLink icon="space_dashboard" title="Dashboard" href="dashboard" />
                <ButtomLink icon="person" title="Profile" href="profile" />
                <ButtomLink icon="forward_to_inbox" title="Contact" href="contact" />
                <ButtomLink icon="person_add" title="Follower" href="follower" />
            </div>


            <div>
                <ButtomLink icon="app_registration" title="Register" href="register" />
                <ButtomLink icon="login" title="Login" href="login" />

            </div>

            <ButtomLink icon="numbers" title="About us" href="about" />

        </ul>
    </aside>
</template>
<style scoped>
/* # Sidebar */
a {
    text-decoration: none;
}
.arrow-right{
    transform: rotate(-180deg);
    transition: .3s linear;
}
.arrow-left{
    transform: rotate(0deg);
    transition: .3s ease-in-out;

}
.position {
    top: 0;
    right: -.7rem;
    z-index: 22222;
}

.sidebar {
    position: fixed;
    top: 4rem;
    left: 0;
    bottom: 0;
    width: 300px;
    height: 93vh;
    z-index: 996;
    transition: all 0.3s;
    padding: 40px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #aab7cf transparent;
    box-shadow: 0px 0px 20px rgba(1, 41, 112, 0.1);
    background-color: #023047;
}

@media (max-width: 1199px) {
    .sidebar {
        top: 3rem;
        position: absolute;
        left: -300px;
    }
}

.sidebar::-webkit-scrollbar {
    width: 5px;
    height: 8px;
    background-color: #fff;
}

.sidebar::-webkit-scrollbar-thumb {
    background-color: #aab7cf;
}

@media (min-width: 1200px) {

    #main,
    #footer {
        margin-left: 300px;
    }
}

@media (max-width: 1199px) {
    .sidebar.toggle-sidebar {
        left: 0;
    }
}

@media (min-width: 1200px) {

    .sidebar.toggle-sidebar {

        left: -260px;
    }
}

.sidebar-nav {
    padding: 0;
    margin: 0;
    list-style: none;
}

.sidebar-nav li {
    padding: 0;
    margin: 0;
    list-style: none;
}

.sidebar-nav .nav-item {
    margin-bottom: 5px;
}

.sidebar .nav-heading {
    font-size: 11px;
    text-transform: uppercase;
    color: #899bbd;
    font-weight: 600;
    margin: 10px 0 13px 0px;
}

.sidebar-nav .nav-content {
    padding: 5px 0 0 0;
    margin: 0;
    list-style: none;
}
</style>