// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH6farHN91DiDzxRpvtqLUIWySp3lP3cQ",
  authDomain: "animehub-c9c8e.firebaseapp.com",
  projectId: "animehub-c9c8e",
  storageBucket: "animehub-c9c8e.firebasestorage.app",
  messagingSenderId: "994833368185",
  appId: "1:994833368185:web:eb82151fa8709ec2a840a8",
  measurementId: "G-NXPY2RJTN8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);