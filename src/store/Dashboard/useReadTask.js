import { collection, onSnapshot, query, where } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../utils/firebase";

export const useReadTask = defineStore('readTask', ()=> {

    const arrayTask = ref([]);

    const readTask = (id) => {
        
        const nameCollection = collection(db, 'task')

        const todoCollectionQuery = query(nameCollection, where("idProyect", "==", id));

        onSnapshot(todoCollectionQuery, (querySnapshot) => {
            const frPost = [];

            querySnapshot.forEach((doc) => {

                const todo = {
                    title: doc.data().title,
                    id: doc.data().id,
                    idProyect: doc.data().idProyect,
                    idBoard: doc.data().idBoard,
                    date: doc.data().date,
                    idFire: doc.id
                }

                frPost.push(todo)

            });

            arrayTask.value = frPost;
        });
    }

    return{
        arrayTask,
        readTask
    }
})