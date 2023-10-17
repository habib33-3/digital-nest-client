// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0261Dc3GD702nKPGB2imchhIlnkpi5OE",
  authDomain: "digital-nest-7d4fd.firebaseapp.com",
  projectId: "digital-nest-7d4fd",
  storageBucket: "digital-nest-7d4fd.appspot.com",
  messagingSenderId: "919172512282",
  appId: "1:919172512282:web:f9fd1688cc2a10f6d02fa3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
