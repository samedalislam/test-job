import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCUJiLNG9k6YbMbKngFrN-gIgDnw43U3Q",
    authDomain: "test-job-f6d84.firebaseapp.com",
    projectId: "test-job-f6d84",
    storageBucket: "test-job-f6d84.appspot.com",
    messagingSenderId: "452477282806",
    appId: "1:452477282806:web:6fabe0b8a5f445a4daffd7"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)