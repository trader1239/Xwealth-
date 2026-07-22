// src/Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkF17ZZj0NAJG1nNfJgXtur876Z9ksWYs",
  authDomain: "wealthx-5d883.firebaseapp.com",
  projectId: "wealthx-5d883",
  storageBucket: "wealthx-5d883.firebasestorage.app",
  messagingSenderId: "310567361740",
  appId: "1:310567361740:web:4b9c7757677ae7d8eeb669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// THIS IS THE PART THAT WAS MISSING
export const auth = getAuth(app);
export const db = getFirestore(app);
