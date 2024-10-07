// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ai-short-generator-9ab28.firebaseapp.com",
  projectId: "ai-short-generator-9ab28",
  storageBucket: "ai-short-generator-9ab28.appspot.com",
  messagingSenderId: "401831496658",
  appId: "1:401831496658:web:417418765e0c58cd74960b",
  measurementId: "G-FDR0W6X3SP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
