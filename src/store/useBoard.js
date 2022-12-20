import { defineStore } from "pinia";
import { ref } from "vue";
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../firebase";


export const useBoard = defineStore('board', () => {

    const boardCollection = collection(db, 'board')


    const button = ref(false);

    const name = ref('');
    const spaceName = ref('');
    const visibilityName = ref('');
        
    const arraySelect = ref([
        { value: "private", name: 'Private', id: crypto.randomUUID },
        { value: "worspace", name: 'Worspace', id: crypto.randomUUID },
        { value: "public", name: 'Public', id: crypto.randomUUID },
    ]);
    
    const handleSubmit = (param, space, visi) => {
        console.log(space)
        addDoc(boardCollection, {
            name: param,
            status: visi,
            id: space,
            idBoard: crypto.randomUUID(),
            date: Date.now(),
        });

        name.value = '';
        spaceName.value = ''
        visibilityName.value = '';

        button.value = false;
    }

    return {
        button, name, spaceName, visibilityName, arraySelect, handleSubmit
    }
})