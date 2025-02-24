import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js'
import { getFirestore, setDoc, doc } from 'https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyC0fqq4-sqZgq1yWTTTPG9MFrIBVvjzZgg",
  authDomain: "quiz-portal-54d05.firebaseapp.com",
  projectId: "quiz-portal-54d05",
  storageBucket: "quiz-portal-54d05.firebasestorage.app",
  messagingSenderId: "66838482420",
  appId: "1:66838482420:web:8e160d14d75512ff8bbda1",
  measurementId: "G-VZDXCNJTDW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app)


export {auth, db, createUserWithEmailAndPassword, setDoc, doc};