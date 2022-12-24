import { collection, deleteDoc, doc } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "../../../utils/firebase";

export const userDeleteTablero = defineStore('tableroDelete', () => {


    const taskCollection = collection(db, 'board')

    const handleDelete = async (id) => {
        await deleteDoc(doc(taskCollection, id));
    }

    return {
        handleDelete
    }
})
