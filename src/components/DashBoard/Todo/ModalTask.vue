<script setup>
import { doc, updateDoc } from "@firebase/firestore";
import { ref } from "@vue/reactivity";
import { useModal } from "../../../store/Dashboard/useModalTask";
import { useUserStore } from "../../../store/user";
import { db } from "../../../utils/firebase";

const modalTask = useModal();
const user = useUserStore();

// State
const editMessage = ref(false);


function handleEdit() {
    editMessage.value = true;
}

function handleClose() {
    editMessage.value = false;
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
            <div class="modal-content">
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
                                    <div class="dropdown mt-2">
                                        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                            Hang tags
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                            <li>
                                                <button class="dropdown-item bg__violet fs-7 py-2" type="button">
                                                    <div class="d-flex align-items-center">
                                                        <span
                                                            class="btn btn-sm bg__violet__span py-2 rounded-circle"></span>
                                                        <p class="m-0 ps-2 fs-7">Todo</p>
                                                    </div>
                                                </button>
                                            </li>
                                            <li>
                                                <button class="dropdown-item bg__secondary  fs-7 py-2" type="button">
                                                    <div class="d-flex align-items-center">
                                                        <span class="btn btn-sm bg-primary py-2 rounded-circle"></span>
                                                        <p class="m-0 ps-2 fs-7">In progress</p>
                                                    </div>
                                                </button>
                                            </li>
                                            <li>
                                                <button class="dropdown-item bg__success  fs-7 py-2" type="button">
                                                    <div class="d-flex align-items-center">
                                                        <span
                                                            class="btn btn-sm bg__sucess__span py-2 rounded-circle"></span>
                                                        <p class="m-0 ps-2 fs-7">Complete</p>
                                                    </div>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <h2 class="fs-7">Expiration</h2>
                            </div>
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
                        <div class="col-4">
                            <h2 class="fs-6">Suggestions</h2>
                            <button class="btn btn-primary btn-sm mt-2">Members</button>
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
                        <div class="d-flex align-items-center gap-2 my-3">
                            <img :src="user?.usuario?.photoURL" class="rounded-circle width"
                                :alt="user?.usuario?.displayName">
                            <h2 class="fs-7 m-0">{{ user?.usuario?.displayName }}</h2>
                        </div>
                        <hr>

                        <div class="d-flex align-items-center gap-2 mt-2">
                            <span class="material-icons-outlined">
                                forum
                            </span>
                            <h2 class="fs-5">Comments</h2>
                        </div>
                        <form method="POST">
                            <div>
                                <label for="comment">Add comment</label>
                                <input name="comment" id="comment" class="form-control" type="text"
                                    placeholder="Ej: Hi, how are you? it's complete?">
                            </div>
                        </form>
                    </section>
                </div>
                <div class="modal-footer">

                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.bg__violet {
    background-color: #bf04bf36;
}

.bg__violet:hover {
    background-color: #bf04bf63;
}

.bg__secondary {
    background-color: #3d9aec43;
}

.bg__secondary:hover {
    background-color: #3d9aeca4;
}

.bg__success {
    background-color: #02a70259;
}

.bg__success:hover {
    background-color: #02a702af;
}

.bg__sucess__span {
    background-color: #02a702fe;
}

.bg__violet__span {
    background-color: #bf04bf;
}
</style>