import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS-wUkUoaegaiVxBQ2dTga1mhF8I8aFho",
  authDomain: "interface-mobile.firebaseapp.com",
  projectId: "interface-mobile",
  storageBucket: "interface-mobile.appspot.com",
  messagingSenderId: "691560897652",
  appId: "1:691560897652:web:b6de5fa6e2cb4275a94521",
  measurementId: "G-C6DP8L5Z50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
