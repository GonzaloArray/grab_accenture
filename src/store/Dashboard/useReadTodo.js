import { collection, onSnapshot, query, where } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../utils/firebase";

export const useReadTodo = defineStore('readTodo', () => {

    try {
        const arrayTodo = ref([]);

        const nameCollection = collection(db, 'tablero')


        const readTablero = (id) => {
            const todoCollectionQuery = query(nameCollection, where("idProyect", "==", id));

            onSnapshot(todoCollectionQuery, (querySnapshot) => {
                const frPost = [];

                querySnapshot.forEach((doc) => {

                    const todo = {
                        name: doc.data().name,
                        id: doc.data().id,
                        idProyect: doc.data().idProyect,
                        date: doc.data().date,
                        idList: doc.id
                    }

                    frPost.push(todo)

                });

                arrayTodo.value = frPost;
                arrayTodo.value.sort((a, b) => a.date - b.date)
            });
        }



        return {
            arrayTodo,
            readTablero
        }
    } catch (error) {
        console.log("Hubo un error")
    }

})