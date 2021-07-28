import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCLk93CD1E4pjbJ7GqeBMScKTNk1mUM42c",
  authDomain: "nwitter-984ee.firebaseapp.com",
  projectId: "nwitter-984ee",
  storageBucket: "nwitter-984ee.appspot.com",
  messagingSenderId: "729652786037",
  appId: "1:729652786037:web:d6c4be69f4583e8cc5593c",
  measurementId: "G-L0Q77CRJK0"
  };

  firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();