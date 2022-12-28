import { doc, updateDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../../utils/firebase";

export const useEditBoard = defineStore('editBoard' , ()=>{

    const modal = ref(false);

    const handleModal = () => {
        modal.value = true;
    }

    const handleEdit = (id, name) =>{
        const taskCollection = doc(db, "tablero", id);

        updateDoc(taskCollection, {
            name
        });

        modal.value = false;
    }

    function handleCancel() {
        modal.value = false;
    }

    return{
        modal,
        handleModal,
        handleEdit,
        handleCancel,
    }
})