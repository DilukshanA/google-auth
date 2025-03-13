// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiMMHNU59vzfo59BKTzL841TFLKQoqQCg",
  authDomain: "auth-nextjs-app-4505f.firebaseapp.com",
  projectId: "auth-nextjs-app-4505f",
  storageBucket: "auth-nextjs-app-4505f.firebasestorage.app",
  messagingSenderId: "441241818993",
  appId: "1:441241818993:web:78ae1ad8ed7ff05e75c8d0",
  measurementId: "G-S0R4K4YSVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };