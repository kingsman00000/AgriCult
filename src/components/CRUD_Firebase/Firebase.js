import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAZIoTiFnXffiObrWA3y-uyjH-bzR2hh2Q",
  authDomain: "agricult-5a61f.firebaseapp.com",
  projectId: "agricult-5a61f",
  storageBucket: "agricult-5a61f.appspot.com",
  messagingSenderId: "585998797421",
  appId: "1:585998797421:web:2a9d5b322d35303d5d8d64",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const database = getDatabase(app);

export const SignIn = async ({ email, password }) => {
  await signInWithEmailAndPassword(auth, email, password);
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //     });
};

export const SignUp = async ({ email, password }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
};

export const SignInSeller = async ({ email, password }) => {};
export const SignUpSeller = async ({ email, password }) => {};
