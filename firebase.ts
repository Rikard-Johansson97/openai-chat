import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwJH6oRp0vEE3mxFu4ISrNsQDQlJ1IWI0",
  authDomain: "openai-chat-c7053.firebaseapp.com",
  projectId: "openai-chat-c7053",
  storageBucket: "openai-chat-c7053.appspot.com",
  messagingSenderId: "219071654207",
  appId: "1:219071654207:web:0307f79692b1ecc143cb8a",
  measurementId: "G-FKDFYD94DL",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
