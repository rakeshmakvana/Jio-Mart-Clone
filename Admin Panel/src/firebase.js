// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCd1flV6k4FTUZRwvPkvPCYk8Rv9r7bIdY",
    authDomain: "jio-mart-859dc.firebaseapp.com",
    projectId: "jio-mart-859dc",
    storageBucket: "jio-mart-859dc.appspot.com",
    messagingSenderId: "94307297914",
    appId: "1:94307297914:web:faa4a7fe054a6ae95269c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);