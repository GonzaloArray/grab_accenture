import { addDoc, arrayUnion, collection } from "@firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../utils/firebase";



export const useSendSpace = defineStore('SendSpace' , ()=>{

    const name = ref('');

    const spaceCollection = collection(db, 'space')

    function handleSpace(space, idUser) {
       
        if (space !== "") {
            const idSpace = ref(crypto.randomUUID());
    
    
            addDoc(spaceCollection, {
                title: space,
                id: idSpace.value,
                idUser,
                idFriend: arrayUnion(idUser)
            });
            
        }

        name.value = "";
    }


    return{
        name, handleSpace
    }
})