import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "../../utils/firebase";

export const useSendTodo = defineStore('todo', () => {

    const tableroCollection = collection(db, 'tablero')


    function createNewBoard(id) {
        const name = prompt("Name of board");
        if (name) {
            addDoc(tableroCollection, {
                name: name,
                id: crypto.randomUUID(),
                idProyect: id,
            });
        }
    }

    return{
        createNewBoard
    }

})