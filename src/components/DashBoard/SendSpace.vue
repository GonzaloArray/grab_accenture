<script setup>
import { useSendSpace } from '../../store/useSendSpace';

const space = useSendSpace();

</script>

<template>
    <form class="p-2" @submit.prevent="space.handleSpace(space.name)" method="POST">
        <div class="pb-4">
            <label class="fs-7 mt-3" for="">Board name</label>
            <input type="text" class="bg__general form-control input__border rounded-0" v-model="space.name"
                placeholder="Ej: Business">
        </div>
        <input class="btn btn-success w-100 mb-3" type="submit" value="Send Space">
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