// src/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

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
export const auth = getAuth(app);
export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged };
