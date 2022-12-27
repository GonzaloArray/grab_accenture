<script setup>
const props = defineProps({
    info: String,
    title: String,
    icon: String,
    modal: String,
})
</script>

<template>
    <button v-if="modal !== ''" type="button" class="border-0 c__primario bg-white">
        <div class="d-flex align-items-center">
            <span class="material-icons-outlined fs-5">
                {{ icon }}
            </span>
            <h2 class="m-0 fs-7 ps-1">{{ title }}</h2>
        </div>
        <p class="m-0 text-start fs-7 py-2 ps-1">{{ info }}</p>
    </button>
</template>

<style scoped>
.c__primario{
    color: #023047;
}

</style>