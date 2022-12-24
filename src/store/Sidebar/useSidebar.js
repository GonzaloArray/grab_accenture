import { defineStore } from "pinia"
import { ref } from "vue"


export const useSidebar = defineStore('sidebar', ()=>{

    const modal = ref(false);

    return{
        modal
    }
})