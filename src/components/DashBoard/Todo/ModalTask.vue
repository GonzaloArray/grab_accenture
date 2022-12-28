<script setup>
import { doc, updateDoc } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useModal } from "../../../store/Dashboard/useModalTask";
import { useUserStore } from "../../../store/user";
import { db } from "../../../utils/firebase";
import TaskHagTag from "../../Ticket/TaskHagTag.vue";
import ModalHagTags from "../ModalTask/ModalHagTags.vue";
import ModalTaskAddComment from "../ModalTask/ModalTaskAddComment.vue";
import ModalReadComment from "../ModalTask/ModalReadComment.vue";
import ModalTaskUser from "./ModalTaskUser.vue";
import ModalTaskMember from "./ModalTaskMember.vue";


const modalTask = useModal();
const user = useUserStore();

// State
const editMessage = ref(false);
const modal = ref(false);


function handleEdit() {
    editMessage.value = true;
}

function handleClose() {
    editMessage.value = false;
}
function handleModal() {
    modal.value = !modal.value;
}
function handleSubmit(id, title) {

    const taskCollection = doc(db, "task", id);

    updateDoc(taskCollection, {
        title
    });

    editMessage.value = false;
}

</script>

<template>
    <div class="modal fade mt-3" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg__modal">
                <div class="modal-header">
                    <form v-if="editMessage" @submit.prevent="handleSubmit(modalTask?.arrayItem?.idFire, modalTask?.arrayItem?.title )" class="d-flex gap-2" method="POST">
                        <input type="text" v-model="modalTask.arrayItem.title" class="form-control">
                        <input type="submit" value="Change" class="btn btn-primary btn-sm">
                        <button type="button" class="btn" @click.prevent="handleClose">
                            <span class="material-icons-outlined">
                                highlight_off
                            </span>
                        </button>
                    </form>
                    <div v-else class="d-flex align-items-center gap-2 hover">
                        <h5 class="modal-title" id="exampleModalLabel">{{ modalTask?.arrayItem?.title }}</h5>
                        <button @click.prevent="handleEdit" class="btn btn-sm mt-2">
                            <span class="material-icons-outlined fs-5">
                                edit
                            </span>
                        </button>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <section class="row">
                        <div class="col-8">
                            <div class="d-flex gap-4">
                                <div>
                                    <h2 class="fs-7">Hang tags</h2>
                                    <ModalHagTags :idTask="modalTask?.arrayItem?.idFire"/>
                                    
                                </div>
                                <h2 class="fs-7">Expiration</h2>
                            </div>
                            <hr>
                            <TaskHagTag v-if="modalTask?.arrayItem"/>
                            <hr>
                            <div class="d-flex align-items-center gap-2">
                                <span class="material-icons-outlined">
                                    description
                                </span>
                                <h2 class="fs-5">Description</h2>
                            </div>
                            <div class="mt-2">
                                <button class="btn">
                                    Add more details description
                                </button>
                            </div>
                        </div>
                        <div class="col-4 position-relative">
                            <h2 class="fs-6">Suggestions</h2>
                            <button @click.prevent="handleModal" class="btn btn-primary btn-sm mt-2">Members</button>

                            <ModalTaskMember v-if="modal"/>
                        </div>

                        <hr>

                        <div class="d-flex align-items-center gap-2 mt-2">
                            <span class="material-icons-outlined">
                                timer
                            </span>
                            <h2 class="fs-5">Activity timer</h2>
                        </div>
                        <div class="d-flex justify-content-between my-3">
                            <div class="d-flex align-items-center gap-3">
                                <button class="btn btn-sm btn-primary">Start timer</button>
                                <div class="d-flex gap-1 align-items-center">
                                    <span class="material-icons-outlined">
                                        av_timer
                                    </span>
                                    <p class="m-0">0m</p>
                                </div>
                            </div>
                            <button class="btn btn-sm btn-secondary">Estimate: <span>0</span></button>
                        </div>

                        <hr>

                        <div class="d-flex align-items-center gap-2 mt-2">
                            <span class="material-icons-outlined">
                                group_add
                            </span>
                            <h2 class="fs-5">Members</h2>
                        </div>
                        <ModalTaskUser />

                        <hr>

                        <ModalTaskAddComment v-if="modalTask?.arrayItem" :idTask="modalTask?.arrayItem?.idFire"/>
                        <ModalReadComment v-if="modalTask?.arrayItem" :idTask="modalTask?.arrayItem?.idFire"/>
                    </section>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg__modal{
    background-color: #F4F5F7!important;
}
.width {
    width: 2rem;
}

.hover span {
    opacity: 0;
    transition: .3s linear;
}

.hover:hover span {
    opacity: 1;
    transition: .3s linear;
}

</style>