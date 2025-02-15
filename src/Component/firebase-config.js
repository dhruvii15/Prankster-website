// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEoVxFUl9j0Bvrc-Golm5pHUjjKoOEXvI",
  authDomain: "prankster-dcca7.firebaseapp.com",
  projectId: "prankster-dcca7",
  storageBucket: "prankster-dcca7.firebasestorage.app",
  messagingSenderId: "610986894997",
  appId: "1:610986894997:web:b92af5ca79267546969d9c",
  measurementId: "G-8Q7L99MZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };