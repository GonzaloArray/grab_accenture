import { auth, db } from "./firebase";
import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile
} from "firebase/auth";

import { useUserStore } from "../store/user.js";
import router from "../router";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";


const store = useUserStore();

function register(displayName, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            updateProfile(auth.currentUser, {
                displayName: displayName,
                photoURL: "https://i.postimg.cc/htLZRTW5/perfil.png",
                email: auth.currentUser.email,
                uid: auth.currentUser.uid
            })

            addDoc(collection(db, 'user_register'), {
                name: displayName,
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
                photoURL: auth.currentUser.photoURL || "https://i.postimg.cc/htLZRTW5/perfil.png"
            });

            const arrayUsuario = {
                displayName: displayName,
                photoURL: 'https://i.postimg.cc/htLZRTW5/perfil.png',
                email: auth.currentUser.email,
                uid: auth.currentUser.uid,
            }

            store.addUsuario(arrayUsuario);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

function login(email, password) {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            updateProfile(auth.currentUser, {
                displayName: auth.currentUser.displayName,
                photoURL: "https://i.postimg.cc/htLZRTW5/perfil.png"
            })

            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        })
}

function loginGoogle() {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
        .then(result => {
            const userCollection = query(collection(db, "user_register"), where("uid", "==", result.user.uid));

            onSnapshot(userCollection, (querySnapshot) => {
                const user = [];
                querySnapshot.forEach((doc) => {
                    user.push({
                        name: doc.data().name,
                        uid: doc.data().uid,
                        photoURL: doc.data().photoURL,
                        email: doc.data().email
                    });
                });

                if (user.length == 0) {
                    addDoc(collection(db, 'user_register'), {
                        name: result.user.displayName,
                        email: result.user.email,
                        uid: result.user.uid,
                        photoURL: result.user.photoURL,
                        online: true,
                    });
                }

            });


            store.addUsuario(result.user);

        })
        .catch(error => console.log(error));
}

function loginFacebook() {

    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup(auth, facebookProvider)
        .then(result => {
            // store.usuario = {...result}

            store.addUsuario(result.user)
        })
        .catch(error => console.log(error));
}

function loginGitHub() {

    const githubProvider = new GithubAuthProvider();
    signInWithPopup(auth, githubProvider)
        .then(result => {
            store.addUsuario(result.user)

        })
        .catch(err => console.log(err));
}

onAuthStateChanged(auth, (user) => {

    store.addUsuario(user);

    router.push('/dashboard');

});

export {
    register,
    login,
    loginGoogle,
    loginFacebook,
    loginGitHub
}