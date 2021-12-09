import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8jdPc8Mc0o499eI1VQWPl2OkMC-qMJDg",
  authDomain: "sql-demos10.firebaseapp.com",
  projectId: "sql-demos10",
  storageBucket: "sql-demos10.appspot.com",
  messagingSenderId: "122250844234",
  appId: "1:122250844234:web:ea8fe8ee49723ef2376eb3",
  measurementId: "G-MSJ0CWESB0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
