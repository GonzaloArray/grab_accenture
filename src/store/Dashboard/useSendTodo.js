import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../utils/firebase";

export const useSendTodo = defineStore('todo', () => {

    // State
    const modal = ref(false);
    const nombre = ref("")


    const tableroCollection = collection(db, 'tablero')

    function createNewBoard(id, name) {
        if (name != "") {
            addDoc(tableroCollection, {
                name: name,
                id: crypto.randomUUID(),
                idProyect: id,
                date: Date.now()
            });
        }
        nombre.value = "";

        modal.value = false;
    }

    return{
        nombre,
        modal,
        createNewBoard
    }

})