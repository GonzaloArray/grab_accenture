import { collection, onSnapshot, query, where } from "firebase/firestore";
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { db } from "../../../utils/firebase";

export const useReadTag = defineStore('readTag', ()=>{

    const arrayStatus = ref(null);
    


    return{
        arrayStatus,

    }
})