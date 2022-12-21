import { defineStore } from "pinia"
import { ref } from "vue"


export const useUserStore = defineStore('user' , ()=> {
    
    const user = ref(null);

    const addUsuario = (user) => {
        user.value = user
    }

    return{
        user,
        addUsuario
    }
})