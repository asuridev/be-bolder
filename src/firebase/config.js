// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXRG5PXDZnp7sqF1W6i_FetgovBYHnmQ4",
  authDomain: "be-bolder.firebaseapp.com",
  projectId: "be-bolder",
  storageBucket: "be-bolder.appspot.com",
  messagingSenderId: "720349745993",
  appId: "1:720349745993:web:c82c192bd283fb0fda4098"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);