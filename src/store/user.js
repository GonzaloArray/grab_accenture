import { defineStore } from "pinia"
import { ref,computed } from "vue"



export const useUserStore = defineStore('user' , ()=> {
    
    const user = ref(null);

    const addUsuario = (user) => {
        user.value = user
    }

    const existeUsuario = computed(() => {
        if (user.value === null) {
            return false;
        } else {
            return true;
        }
    })

    return{
        user,
        addUsuario,
        existeUsuario
    }
})