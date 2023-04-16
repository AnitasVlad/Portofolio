// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCgz6JznMADo42ofDJetrxOvJCIbs9JPmU",
    authDomain: "anita-vlad-portofolio.firebaseapp.com",
    projectId: "anita-vlad-portofolio",
    storageBucket: "anita-vlad-portofolio.appspot.com",
    messagingSenderId: "475454283433",
    appId: "1:475454283433:web:65b763ecec3ac9178853b8",
    measurementId: "G-E0ZE5M0ZRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);