<script setup>
import { useDeletePost } from '../../../store/Dashboard/CRUD/useDelete';

const props = defineProps({
    icon: String,
    info: String,
})


</script>

<template>
    <li><a class="dropdown-item fs-7" href="#">
            <div class="d-flex align-items-start">
                <span class="material-icons-outlined fs-6 text-secondary me-2">
                    {{icon}}
                </span>
                <p class="m-0 fw-bold">
                    {{info}}
                </p>
            </div>
        </a>
    </li>
</template>

<style scoped>

</style>