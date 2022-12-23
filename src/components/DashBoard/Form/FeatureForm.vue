<script setup>

</script>

<template>
    <section class="width list bg__white mx-2 p-2 d-flex align-items-center justify-content-center">
        <div>
            <a href="#" class="text-white nav-link d-flex align-items-center">
                <span class="material-icons-outlined">
                    add
                </span>
                <p class="m-0">Add another list</p>
            </a>
        </div>
    </section>
</template>

<style scoped>

.bg__white {
    background-color: #0303031f;
}

.width {
    width: 150px;
    height: 50px;
}

.list {
    flex: 0 0 17.5rem;
    display: flex;
    flex-direction: column;
    background-color: #a2a3a3;
    max-height: calc(100vh - 11.8rem);
    border-radius: 0.3rem;
    margin-right: 1rem;
    cursor: pointer;
}

.list:last-of-type {
    margin-right: 0;
}
</style>