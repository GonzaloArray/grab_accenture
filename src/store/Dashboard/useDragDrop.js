import { addDoc, collection } from "firebase/firestore";
import { defineStore } from "pinia";
import { db } from "../../utils/firebase";
import { useReadTodo } from './useReadTodo'

export const useDragDrop = defineStore('dragDrop',()=> {

    const readTablero = useReadTodo();

    function handleNewItem(text, board) {
        
        const taskCollection = collection(db, 'task');

        addDoc(taskCollection, {
            text: text.value,
            id: crypto.randomUUID(),
            idProyect: id,
            date: Date.now()
        });

        // board.items.push({ id: crypto.randomUUID(), title: text.value });
    }

    return{
        handleNewItem
    }
})