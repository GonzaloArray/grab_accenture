import { defineStore } from "pinia";
import { ref } from "vue";


export const useCreate = defineStore('create', () => {

    const create = ref(null)
    const modal = ref(false);


    const arrayButton = ref([
        {
            id: crypto.randomUUID(),
            icon: "space_dashboard",
            title: "Create space",
            modal: 'space',
            info: "Use it to manage projects, track information, or organize any activity.",
        },
        {
            id: crypto.randomUUID(),
            icon: "dashboard",
            title: "Create board",
            modal: 'board',
            info: "Get up and running faster with a dashboard template.",
        },
        {
            id: crypto.randomUUID(),
            icon: "people",
            title: "Create workspace",
            modal: 'workspace',
            info: "Use it to organize your company, your side project and your plans with family or friends.",
        },
    ])
    


    return{
        create,
        modal,
        arrayButton
    }
})