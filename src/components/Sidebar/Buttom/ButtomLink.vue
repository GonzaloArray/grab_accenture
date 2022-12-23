<template>
    <li class="nav-item">
        <RouterLink class="nav-link collapsed buttonLink" :to="'/'+href">
            <span class="material-icons-outlined opacity me-2">
                {{ icon }}
            </span>
            <span>{{ title }}</span>
        </RouterLink>
    </li>
</template>
<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
    icon: String,
    title: String,
    href: String
})

</script>
<style scoped>
.sidebar-nav .nav-item {
    margin-bottom: 5px;
}


.sidebar-nav .nav-link{
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 600;
    color: #7CF6FD;
    transition: 0.3;
    background: #f6f9ff;
    padding: 10px 15px;
    border-radius: 4px;
}

/* collapse */

.sidebar-nav .nav-item {
    margin-bottom: 5px;
}

.sidebar-nav .nav-link.collapsed{
    color: #012970;
    background: #fff;
}
.sidebar-nav .nav-link.collapsed:focus{
    color: #7CF6FD;
    background: #f6f9ff;
}

.sidebar-nav .nav-link:hover {
    color: #7CF6FD;
    background: #f6f9ff;
}

.sidebar-nav .nav-link:hover span {
    color: #7CF6FD;
}

</style>