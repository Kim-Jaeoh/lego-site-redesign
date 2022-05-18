// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK4ilyX7Z3jUCoKEQjsRKsDxptF0p_atw",
  authDomain: "legosite-e8c1d.firebaseapp.com",
  projectId: "legosite-e8c1d",
  storageBucket: "legosite-e8c1d.appspot.com",
  messagingSenderId: "910605262207",
  appId: "1:910605262207:web:345fadedf724000c34ce4a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
