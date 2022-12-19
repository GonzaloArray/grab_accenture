<script setup>
import { RouterLink } from "vue-router";

const props = defineProps({
    href: String,
    icon: String,
    text: String
})

</script>

<template>
    <RouterLink class="btn__premiun rounded-2 text-light" :to="'/' + href">
        <div class="d-flex align-items-center justify-content-center">
            <span class="material-icons-outlined me-2">
                {{icon}}
            </span>
            <p class="m-0">{{text}}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
.btn__premiun {
    padding: .4rem 40px;
    text-decoration: none;
    box-shadow: inset 18px 64px 231px -119px rgb(209, 4, 4);
    background: linear-gradient(to right, rgba(255, 183, 3, 1) 0%, rgba(255, 183, 3, 1) 8%, rgba(251, 133, 0, 1) 38%, rgba(251, 133, 0, 1) 90%, rgba(251, 133, 0, 1) 100%);
}

.btn__premiun:hover {
    background: #f69423;
}
</style>