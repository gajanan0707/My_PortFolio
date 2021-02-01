import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDSyaDYdtJ5Q0w7SQ2Vxc395GqtshERioU",
  authDomain: "todoreactjs-aade5.firebaseapp.com",
  projectId: "todoreactjs-aade5",
  storageBucket: "todoreactjs-aade5.appspot.com",
  messagingSenderId: "606222155669",
  appId: "1:606222155669:web:7a37aad5841d861f21809c",
  measurementId: "G-G0ZFH3MJ34",
});

const db = firebaseApp.firestore();

export default db ;