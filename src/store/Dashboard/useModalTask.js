import { defineStore } from "pinia";
import { ref } from "vue";

export const useModal = defineStore('modalTask' , ()=>{

    const modal = ref(false)

    const arrayItem = ref(null);

    const handleModal = (item) =>{
        arrayItem.value = item; 

    }

    return{
        arrayItem,
        handleModal
    }
})
