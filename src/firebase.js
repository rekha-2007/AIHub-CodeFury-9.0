// Import Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqUFeCCdr5M74FCJngBp3B0qhHOnKR3q4",
  authDomain: "aihub-2b8a0.firebaseapp.com",
  projectId: "aihub-2b8a0",
  storageBucket: "aihub-2b8a0.firebasestorage.app",
  messagingSenderId: "327286425917",
  appId: "1:327286425917:web:22e37c97a241ba86f29d54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);

// Firestore Database
export const db = getFirestore(app);