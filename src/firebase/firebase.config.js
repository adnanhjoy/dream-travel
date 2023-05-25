// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_XdOcUHvwkDUTARuY3DLOaIOu_EDptao",
  authDomain: "d-travell.firebaseapp.com",
  projectId: "d-travell",
  storageBucket: "d-travell.appspot.com",
  messagingSenderId: "195225604269",
  appId: "1:195225604269:web:dc25a1ec5bc00da8f6b624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;