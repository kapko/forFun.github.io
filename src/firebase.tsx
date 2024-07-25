// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG6mAD82JoO4x38PJK-ZlgJ1GG2qkzwVQ",
  authDomain: "example-firebase-collection.firebaseapp.com",
  projectId: "example-firebase-collection",
  storageBucket: "example-firebase-collection.appspot.com",
  messagingSenderId: "566496829857",
  appId: "1:566496829857:web:cafc7161e4c180172d6be0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()