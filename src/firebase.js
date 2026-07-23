import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6x2KfV0hFzQ9mN8pL7wR3tY4uI5oP6aS",
  authDomain: "wealthx-5d883.firebaseapp.com",
  projectId: "wealthx-5d883",
  storageBucket: "wealthx-5d883.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
