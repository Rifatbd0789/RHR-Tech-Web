// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAdE1RweBBWyJyubJk5KkMcmh25jMnHCc",
  authDomain: "rhr-tech.firebaseapp.com",
  projectId: "rhr-tech",
  storageBucket: "rhr-tech.appspot.com",
  messagingSenderId: "402097267287",
  appId: "1:402097267287:web:b9f48a11bd651d48e77912",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
