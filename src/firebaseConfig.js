//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCgaceBZuQNg5E_zvgvvkPC4ZRQnoNMTQE",
  authDomain: "fir-frontend-20220504.firebaseapp.com",
  projectId: "fir-frontend-20220504",
  storageBucket: "fir-frontend-20220504.appspot.com",
  messagingSenderId: "150848515776",
  appId: "1:150848515776:web:857f7f0e7b373887fc0725"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore();