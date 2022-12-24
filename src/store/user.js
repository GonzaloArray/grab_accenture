import { defineStore } from "pinia"
import { ref, computed } from "vue"



export const useUserStore = defineStore('user' , ()=> {
    
    const usuario = ref(null);

    const addUsuario = (user) => {
        usuario.value = user
    }

    const existeUsuario = computed(() => {
        if (usuario.value === null) {
            return false;
        } else {
            return true;
        }
    })
    
    return{
        usuario,
        addUsuario,
        existeUsuario
    }
})