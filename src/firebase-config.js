// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACJ3jo2D2umwIZMXDF771oOCiItyrf-MQ",
    authDomain: "mythworldblog.firebaseapp.com",
    projectId: "mythworldblog",
    storageBucket: "mythworldblog.appspot.com",
    messagingSenderId: "593441969379",
    appId: "1:593441969379:web:16b4b7a7960cd548d4e1d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
export const database = getFirestore(app)
export const storage = getStorage(app)