// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqWLaLgvgBy0BF8fb_1Fsou4Mwzq72oTE",
  authDomain: "clone-9e0f3.firebaseapp.com",
  projectId: "clone-9e0f3",
  storageBucket: "clone-9e0f3.appspot.com",
  messagingSenderId: "259834378420",
  appId: "1:259834378420:web:0c8035b77fbe13b5a1ffe1",
  measurementId: "G-SMF0ZL9YCJ",
};
const firebaseApp=firebase.initializeApp(firebaseConfig)
const db =firebaseApp.firestore()
const auth=firebase.auth()
export { db,auth}
