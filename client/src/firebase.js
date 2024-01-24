// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-cdf89.firebaseapp.com",
  projectId: "mern-blog-app-cdf89",
  storageBucket: "mern-blog-app-cdf89.appspot.com",
  messagingSenderId: "824851926057",
  appId: "1:824851926057:web:03dcf774e22a7522f7e038",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
