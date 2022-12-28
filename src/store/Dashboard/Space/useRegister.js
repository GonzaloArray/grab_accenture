import { collection, onSnapshot } from "firebase/firestore";
import { defineStore } from "pinia";
import { ref } from "vue";
import { db } from "../../../utils/firebase";
import { useUserStore } from "../../user";

export const useUserRegister = defineStore('userRegister', () => {
    const user = useUserStore()

    const arrayUser = ref([]);
    
    const nameCollection = collection(db, 'user_register')

    onSnapshot(nameCollection, (querySnapshot) => {
        const frPost = [];

        querySnapshot.forEach((doc) => {

            const todo = {
                name: doc.data().name,
                uid: doc.data().uid,
                photoURL: doc.data().photoURL,
                email: doc.data().email,
                idUser: doc.id,
                online: doc.data().online
            }

            frPost.push(todo)

        });

        const userValid = frPost.filter(el => el.uid !== user?.usuario?.uid );
        arrayUser.value = userValid;

        
    });

    return{
        arrayUser
    }
})