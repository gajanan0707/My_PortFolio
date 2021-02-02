import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCulx3VGIvw9UbAOBOx7skRQoL4snf5JYA",
  authDomain: "myportfolio-ae25c.firebaseapp.com",
  projectId: "myportfolio-ae25c",
  storageBucket: "myportfolio-ae25c.appspot.com",
  messagingSenderId: "236927758910",
  appId: "1:236927758910:web:cdd24337de0c61028e976f",
  measurementId: "G-P52DHRZK8V"
});

const db = firebaseApp.firestore();

export default db ;