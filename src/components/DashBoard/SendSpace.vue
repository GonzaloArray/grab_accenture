<script setup>
import { useCreate } from '../../store/Header/CreateDash';
import { useUserStore } from '../../store/user';
import { useSendSpace } from '../../store/useSendSpace';

const space = useSendSpace();
const store = useCreate();
const user = useUserStore()
function handleClick(){

    store.modal = false; 
}

</script>

<template>
    <form @keyup.esc="handleClick" class="position-absolute end-0 top-0 bottom-0 start-0 d-flex justify-content-center align-items-center container z-index"
        @submit.prevent="space.handleSpace(space.name, user?.usuario?.uid)" method="POST">
        <section class="bg-light rounded-2 container m-2 p-4 shadow width">
            <div class="d-flex justify-content-between align-items-center pb-2 border-bottom ">
                <h2 class="fs-6">Create space</h2>
                <button @click.prevent="handleClick" class="btn btn-sm rounded-pill">
                    <div class="d-flex align-items-center">
                        <span class="material-icons-outlined text-dark me-1 fs-7">
                            close
                        </span>
                    </div>
                </button>

            </div>
            <div class="pb-4">
                <label class="fs-7 mt-3" for="space">Space name</label>
                <input @blur="handleClick" type="text" class="bg-light form-control input__border rounded-0" name="space" id="space" v-model="space.name"
                    placeholder="Ej: Business">
            </div>
            <input class="btn btn-success w-100 mb-3" type="submit" value="Send Space">
        </section>
    </form>
</template>

<style scoped>
.bg__general {
    background-color: #c4c4c4;
}
.z-index{
    z-index: 9999;
}
.width{
    width: 300px;
}
.input__border {
    border: none;
    border-bottom: 1px solid;
}
</style>