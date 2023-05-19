// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMtVetzPdFy701Sau1DKv4_3Vo7dQ7byw",
  authDomain: "disney-world-toys.firebaseapp.com",
  projectId: "disney-world-toys",
  storageBucket: "disney-world-toys.appspot.com",
  messagingSenderId: "30680436450",
  appId: "1:30680436450:web:d484b32c05fbc6779f18bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;