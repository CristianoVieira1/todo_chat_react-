import firebase from 'firebase/app';
import "firebase/auth";


export const auth = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "hybri-6c01a.firebaseapp.com",
  projectId: "hybri-6c01a",
  storageBucket: "hybri-6c01a.appspot.com",
  messagingSenderId: "367025276165",
  appId: process.env.REACT_APP_CHAT_ID,
}).auth()