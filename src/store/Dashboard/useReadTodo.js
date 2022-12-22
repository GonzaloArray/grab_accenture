import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import { db } from "../../utils/firebase";

export const useReadTodo = defineStore('readTodo', ()=>{

    const arrayTodo = ref([]);

    const nameCollection = collection(db, 'tablero')

    
    onMounted(() => {
        onSnapshot(nameCollection, (querySnapshot) => {
            const frPost = [
                {
                    id: crypto.randomUUID(),
                    name: "TODO",
                    items: [{ id: crypto.randomUUID(), title: "Hola a todos" }],
                },
                {
                    id: crypto.randomUUID(),
                    name: "In progress",
                    items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
                },
                {
                    id: crypto.randomUUID(),
                    name: "Complete",
                    items: [{ id: crypto.randomUUID(), title: "Hola a todos 2" }],
                },
            ];

            querySnapshot.forEach((doc) => {

                const todo = {
                    name: doc.data().name,
                    id: doc.data().id,
                    idProyect: doc.data().idProyect,
                }

                frPost.push(todo)

            });

            arrayTodo.value = frPost;
            console.log(arrayTodo.value)
        });

    })


    return{
        arrayTodo
    }
})