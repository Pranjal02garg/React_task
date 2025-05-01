// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYWhI6ta0hxEQCieknds8KgQ7J4_xIpwg",
  authDomain: "react-assignment-af54f.firebaseapp.com",
  projectId: "react-assignment-af54f",
  storageBucket: "react-assignment-af54f.firebasestorage.app",
  messagingSenderId: "73074326734",
  appId: "1:73074326734:web:893df00ad818f2b8b4a49f",
  measurementId: "G-PJT7Q9LL3S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);