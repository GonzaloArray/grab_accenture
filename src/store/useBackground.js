import { defineStore } from "pinia";

import { ref } from 'vue';


export const useBackground = defineStore('background', ()=> {
    
    const background = ref([
        {
            color: '#fff',
            id: crypto.randomUUID()
        },
        {
            color: '#000',
            id: crypto.randomUUID()
        },
        {
            color: '#fb8500',
            id: crypto.randomUUID()
        },
        {
            color: '#ffb703',
            id: crypto.randomUUID()
        },
    ])

    const back = ref(null)

    return{
        background,
        back
    }
})
