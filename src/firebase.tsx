// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGfZ4UyvmPNP07LLPzx80vgq3zgjgY26U",
  authDomain: "auth-bed3a.firebaseapp.com",
  projectId: "auth-bed3a",
  storageBucket: "auth-bed3a.appspot.com",
  messagingSenderId: "967982826906",
  appId: "1:967982826906:web:44404acc171cc5b43ea623"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);