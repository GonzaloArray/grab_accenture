<script setup>
const props = defineProps({
    info: String,
    title: String,
    icon: String,
})
</script>

<template>
    <button type="button" class="border-0 c__primario bg-white">
        <div class="d-flex align-items-center">
            <span class="material-icons-outlined fs-5 me-1">
                {{ icon }}
            </span>
            <h2 class="m-0 fs-7 ">{{ title }}</h2>
        </div>
        <p class="m-0 text-start fs-7 my-2 ms-1">{{ info }}</p>
    </button>
</template>

<style scoped>

</style>