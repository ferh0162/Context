// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI3vWf2civoRZkCvl8ATJXVQQNAPRtm58",
  authDomain: "context-f18a0.firebaseapp.com",
  projectId: "context-f18a0",
  storageBucket: "context-f18a0.appspot.com",
  messagingSenderId: "235807037548",
  appId: "1:235807037548:web:543070f3ccef33b5e3a049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database, app }
