import { collection, deleteDoc, doc } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from '../../../utils/firebase'


export const useDeleteTask = defineStore('deleteTask',()=>{

    const taskCollection = collection(db, 'task') 

    const handleDelete = async(id) => {
        await deleteDoc(doc(taskCollection, id));
    }

    return{
        handleDelete
    }


})