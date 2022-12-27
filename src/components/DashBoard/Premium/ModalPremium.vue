<script setup>
import { RouterLink } from "vue-router";
import { useConfetti } from '../../../store/useConfetti'

const confetti = useConfetti();

</script>

<template>

    <div class="modal fade" id="premium" tabindex="-1" aria-labelledby="exampleModalpremium" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body py-4">
                    <img src="../../../assets/Images/confetti.svg" alt="Confetti">
                    <div>
                        <h2 class="fs-4 text-center mt-3">Try GRAB Premium subscription free for 14 days</h2>
                        <p class="mt-3 text-center fs-7 px-3">Explore the best features of GRAB without having to provide your credit card.</p>
                        <ul class="d-flex justify-content-center ps-5 ms-5 mt-3 flex-column">
                            <li>unlimited boards</li>
                            <li>advanced checklists</li>
                            <li>Management and security features</li>
                            <li>unlimited automations</li>
                            <li>And much more.</li>
                        </ul>
                        <RouterLink @click.prevent="confetti.handleConfetti" to="dashboard" data-bs-dismiss="modal" class="btn btn-sm btn-primary w-100 my-3">
                            Start free trial
                        </RouterLink>
                        <RouterLink class="d-flex justify-content-center" to="politic">Learn more about the features of Grab plans</RouterLink>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>