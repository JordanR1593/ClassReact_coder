// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiuHGQh8nD1WxeyT6ZL6uFAg9v1TEkcGc",
  authDomain: "proyecto-react-coder-7999f.firebaseapp.com",
  projectId: "proyecto-react-coder-7999f",
  storageBucket: "proyecto-react-coder-7999f.appspot.com",
  messagingSenderId: "989834548577",
  appId: "1:989834548577:web:1256dc912f462f88556120",
  measurementId: "G-ZS3DJ3RD1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const analytics = getAnalytics(app);
export default db;