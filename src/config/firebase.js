// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider ,signOut} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBl-ebFB1wW3SKIc5Wg_1crifm7MBXFZ8o",
  authDomain: "bisma-8262e.firebaseapp.com",
  projectId: "bisma-8262e",
  storageBucket: "bisma-8262e.appspot.com",
  messagingSenderId: "1093291120565",
  appId: "1:1093291120565:web:2c51ee24eff4be50d46bfc",
  measurementId: "G-M25ZQPEB6M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const loginGoogle = new GoogleAuthProvider()
export const image =getStorage(app)
export const database = getFirestore(app);

