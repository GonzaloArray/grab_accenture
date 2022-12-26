import { collection, onSnapshot, orderBy, query, where } from "@firebase/firestore";
import { defineStore } from "pinia"
import { onMounted, ref } from "vue";
import { db } from "../utils/firebase";


export const useReadBoard = defineStore('ReadBoard', () => {

    const arrayBoard = ref([]);
    const arrayProyect = ref([]);
    const nameCollection = collection(db, 'space')
    const boardCollection = collection(db, 'board')


    onMounted(() => {
        onSnapshot(nameCollection, (querySnapshot) => {
            const frPost = [];

            querySnapshot.forEach((doc) => {

                const todo = {
                    title: doc.data().title,
                    id: doc.data().id,
                    idSpace: doc.id
                }

                frPost.push(todo)

            });

            arrayProyect.value = frPost;
        });

        onSnapshot(boardCollection, (querySnapshot) => {
            const frPost = [];

            querySnapshot.forEach((doc) => {

                const todo = {
                    name: doc.data().name,
                    status: doc.data().status,
                    date: doc.data().date,
                    id: doc.data().id,
                    idBoard: doc.data().idBoard,
                    idTablero: doc.id
                }

                frPost.push(todo)

            });

            arrayBoard.value = frPost;
        });
    })


    return {
        arrayBoard, arrayProyect
    }
})
