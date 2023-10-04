// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8iPfKCeX6SyPOxd8V9X6WrljSgWicUng",
  authDomain: "dragon-news-firebase-7e81d.firebaseapp.com",
  projectId: "dragon-news-firebase-7e81d",
  storageBucket: "dragon-news-firebase-7e81d.appspot.com",
  messagingSenderId: "512047996008",
  appId: "1:512047996008:web:36e97a6762da9d8124efdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;