<script setup>
import { onMounted, ref, reactive, defineProps } from "vue";
//const props = defineProps(["onNewItem"]);
const text = ref("");
const emits = defineEmits(["onNewItem"]);

function handleKeyDown(evt) {
  if (evt.key === "Enter") {
    emits("onNewItem", text);
    text.value = "";
  }
}
</script>

<template>
  
  <input class="form-control mb-4" v-model="text" @keydown="handleKeyDown" placeholder="Add to card" />

</template>

<style scoped>

</style>
