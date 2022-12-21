import {
    createUserWithEmailAndPassword,
    FacebookAuthProvider,
    GithubAuthProvider,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
    signOut
} from "firebase/auth";

// import { useUser } from "../store/usePinia.js";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from ".";
import router from "../router";

// const store = useUser();

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
            store.addUsuario(result.user);
            console.log(result.data().user)
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

function logOut(){
    signOut(auth).then(() => {
        console.log('logOut');
        user.value=null
    }).catch((error) => {
        console.log('logOut Error');
    });
}

export {
    register,
    login,
    loginGoogle,
    loginFacebook,
    loginGitHub,
    logOut
}