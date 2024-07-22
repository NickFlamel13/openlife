// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-ce2c8.firebaseapp.com",
  projectId: "mern-auth-ce2c8",
  storageBucket: "mern-auth-ce2c8.appspot.com",
  messagingSenderId: "622113922948",
  appId: "1:622113922948:web:0e882757e98281a4e0c7d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);