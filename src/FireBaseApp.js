import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD4obo6nEncy5bYMShxwTIwEZm1AqyOFL4",
  authDomain: "fir-214b5.firebaseapp.com",
  projectId: "fir-214b5",
  storageBucket: "fir-214b5.appspot.com",
  messagingSenderId: "868208892471",
  appId: "1:868208892471:web:06c91b7ff2b74da4e2bdb2",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };
