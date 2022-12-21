import { addDoc, collection } from "@firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../utils/firebase";



export const useSendSpace = defineStore('SendSpace' , ()=>{

    const name = ref('');

    const spaceCollection = collection(db, 'space')

    function handleSpace(space) {

        const idSpace = ref(crypto.randomUUID());


        addDoc(spaceCollection, {
            title: space,
            id: idSpace.value,
        });

        name.value = "";
    }


    return{
        name, handleSpace
    }
})