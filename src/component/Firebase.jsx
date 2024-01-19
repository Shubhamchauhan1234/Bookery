// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrpzeIm-MnmcJiBI2qTsZIq3FRUOxCJnU",
  authDomain: "bookery-d768d.firebaseapp.com",
  projectId: "bookery-d768d",
  storageBucket: "bookery-d768d.appspot.com",
  messagingSenderId: "618838675991",
  databaseURL:"https://bookery-d768d-default-rtdb.firebaseio.com",
  appId: "1:618838675991:web:6a7de3b2c9f01366428252"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);