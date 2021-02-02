import firebase from "firebase";
import {environment} from './environments/environment'

const firebaseApp = firebase.initializeApp({
  apiKey: environment.APIKEY,
  authDomain: environment.AUTHDOMAIN,
  projectId:environment.PROJECTID,
  storageBucket: environment.STORAGEBUCKET,
  messagingSenderId: environment.MESSAGINGSENDERId,
  appId: environment.APPID,
  measurementId: environment.MEASUREMENTID
});

const db = firebaseApp.firestore();

export default db ;