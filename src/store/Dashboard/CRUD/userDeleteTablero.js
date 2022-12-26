import { collection, deleteDoc, doc } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../../utils/firebase";

export const userDeleteTablero = defineStore('tableroDelete', () => {

    try {
        const taskCollection = collection(db, 'board')

        const handleDelete = async (id) => {
            await deleteDoc(doc(taskCollection, id));
        }

        return {
            handleDelete,
        }

    } catch (error) {
        console.log("Hubo un error")
    }
})
