import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnptEu7hn-SHyR_gj3itU17bThn816Xyc",
  authDomain: "atv03-mobile.firebaseapp.com",
  projectId: "atv03-mobile",
  storageBucket: "atv03-mobile.appspot.com",
  messagingSenderId: "542459986395",
  appId: "1:542459986395:web:24ce83f1d2a7ec28b0e7fe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
const db = getFirestore(app);

export { app, db };
