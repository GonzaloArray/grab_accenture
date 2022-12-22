<script setup>
import { useSendSpace } from '../../store/useSendSpace';

const emits = defineEmits(['modal-false']);
const space = useSendSpace();


function handleClick(){

    emits('modal-false', false)
}

</script>

<template>
    <form class="position-absolute end-0 top-0 mt-5 bottom-0 start-0 container w-25" @submit.prevent="space.handleSpace(space.name)" method="POST">
        <section class="bg-light rounded-2 container m-2 p-4 shadow">
            <button @click.prevent="handleClick" class="btn btn-danger btn-sm rounded-pill">
                <div class="d-flex align-items-center">
                    <span class="material-icons-outlined me-1 fs-7">
                        close
                    </span>
                    <p class="m-0 pe-2 fs-7">close</p>
                </div>
            </button>
            <div class="pb-4">
                <label class="fs-7 mt-3" for="">Board name</label>
                <input type="text" class="bg-light form-control input__border rounded-0" v-model="space.name"
                    placeholder="Ej: Business">
            </div>
            <input class="btn btn-success w-100 mb-3" type="submit" value="Send Space">
        </section>
    </form>
</template>

<style scoped>
.bg__general{
    background-color: #c4c4c4;
}
.input__border {
    border: none;
    border-bottom: 1px solid;
}
</style>