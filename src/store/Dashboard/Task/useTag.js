import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from '../../../utils/firebase'

export const useTag = defineStore('tag', () => {

    const arrayTag = ref([
        {
            name: 'TODO',
            color: 'bf04bf36',
            id: crypto.randomUUID(),
        },
        {
            name: 'In progress',
            color: '3d9aec43',
            id: crypto.randomUUID(),
        },
        {
            name: 'Complete',
            color: '02a702af',
            id: crypto.randomUUID(),
        },
        {
            name: 'Reject',
            color: 'e93737',
            id: crypto.randomUUID(),
        },
    ])

    const tableroCollection = collection(db, 'status')

    function handleTag (id, name, color, idTask) {
        
        addDoc(tableroCollection, {
            name,
            color,
            id,
            idTask,
            date: Date.now()
        });

    }

    return {
        arrayTag,
        handleTag
    }

})