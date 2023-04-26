// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD5R8GPTWo1vicUVN-vp0p5JGzqx8On8jg",
    authDomain: "romina-ponces-estilista.firebaseapp.com",
    projectId: "romina-ponces-estilista",
    storageBucket: "romina-ponces-estilista.appspot.com",
    messagingSenderId: "380966840389",
    appId: "1:380966840389:web:4a41f0a9b63679d7d21b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);