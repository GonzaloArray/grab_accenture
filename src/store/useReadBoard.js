import { useUserStore } from './user'
import { collection, doc, getDocs, onSnapshot, query, where } from "@firebase/firestore";
import { defineStore } from "pinia"
import { onMounted, ref } from "vue";
import { db } from "../utils/firebase";

export const useReadBoard = defineStore('ReadBoard', () => {

    const user = useUserStore();

    const arrayBoard = ref([]);
    const arrayProyect = ref([]);
    // const arrayFriend = ref([]);
    const nameCollection = collection(db, 'space');
    const boardCollection = collection(db, 'board');



    onMounted( async() => {


        const currentUserId = user?.usuario?.uid

        const querySnapshot = await getDocs(collection(db, "space"));
        querySnapshot.forEach((doc) => {
            doc.data()
        });
        const spaces = querySnapshot.docs.map(doc => doc.data())
        console.log(spaces)
        const userIds = spaces.map(space => space.idFriend).flat()
        console.log(userIds)

        if (userIds.includes(currentUserId)) {
            const todoCollectionQuery = query(nameCollection, where("idFriend", "array-contains", currentUserId))

            onSnapshot(todoCollectionQuery, (querySnapshot) => {
                const frPost = []

                querySnapshot.forEach((doc) => {
                    const todo = {
                        title: doc.data().title,
                        id: doc.data().id,
                        idSpace: doc.id,
                    }
                    frPost.push(todo)
                })

                arrayProyect.value = frPost
                
            })
        }


/* 
        const todoCollectionQuery = query(nameCollection, where("idUser", "==", user?.usuario?.uid));

        onSnapshot(todoCollectionQuery, (querySnapshot) => {
            const frPost = [];

            querySnapshot.forEach((doc) => {

                const todo = {
                    title: doc.data().title,
                    id: doc.data().id,
                    idSpace: doc.id,
                }

                frPost.push(todo)

            });

            arrayProyect.value = frPost;
        }); */

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
