// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBQcBoRLcmEhLdzpF_FGHBWR2T85ps69ag",
  authDomain: "grab-accenture.firebaseapp.com",
  databaseURL: "https://grab-accenture-default-rtdb.firebaseio.com",
  projectId: "grab-accenture",
  storageBucket: "grab-accenture.appspot.com",
  messagingSenderId: "247887252309",
  appId: "1:247887252309:web:0071045d44d06f2794bddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
const db = getFirestore(app);

// Utils
const auth = getAuth(app);

// Exports
export {
    auth,
    db
}