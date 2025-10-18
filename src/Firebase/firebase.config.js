// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGDxYw8BS9l_foBwY6HNgT-ir0YK63PH8",
  authDomain: "dragon-news-auth-breaking.firebaseapp.com",
  projectId: "dragon-news-auth-breaking",
  storageBucket: "dragon-news-auth-breaking.firebasestorage.app",
  messagingSenderId: "489869841369",
  appId: "1:489869841369:web:bdf62318843e8e2b8d7fc8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;