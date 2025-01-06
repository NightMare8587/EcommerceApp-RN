import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDfGEZu-XFufWnByZL9dJJky4AwFG4klnE",
  authDomain: "ecommerceapp-rn-db298.firebaseapp.com",
  projectId: "ecommerceapp-rn-db298",
  storageBucket: "ecommerceapp-rn-db298.firebasestorage.app",
  messagingSenderId: "229252686209",
  appId: "1:229252686209:web:6f2cebeaf2b2e67346c880",
  measurementId: "G-YQN838R9HM",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = initializeAuth(firebaseApp);

export {
  firebaseApp,
  firebaseAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
};
