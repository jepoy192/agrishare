// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx2SD05XZyyaJLlWyRqnIqU0xeg_sAwhY",
  authDomain: "agrishare-b9b23.firebaseapp.com",
  projectId: "agrishare-b9b23",
  storageBucket: "agrishare-b9b23.appspot.com",
  messagingSenderId: "363623859095",
  appId: "1:363623859095:web:df0e053aa7c2a0e71c7ad2",
  measurementId: "G-HHH6ZJMFLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);