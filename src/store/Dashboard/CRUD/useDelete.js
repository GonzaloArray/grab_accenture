import { defineStore } from "pinia";
import { doc, deleteDoc, collection } from "firebase/firestore";
import { db } from '../../../utils/firebase'

export const useDeletePost = defineStore('deletePost',() => {
    const nameCollection = collection(db, 'tablero') 

    const handleDelete = async(id) => {
        await deleteDoc(doc(nameCollection, id));
    }

    return{
        handleDelete
    }
})