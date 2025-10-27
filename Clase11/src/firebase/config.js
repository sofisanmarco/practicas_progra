import app from 'firebase/app';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCUeA3T7K1bIlJ1Q2dWxdg7kmP9QNhP_O8",
  authDomain: "proyectofirebase-e3532.firebaseapp.com",
  projectId: "proyectofirebase-e3532",
  storageBucket: "proyectofirebase-e3532.firebasestorage.app",
  messagingSenderId: "651918986457",
  appId: "1:651918986457:web:371ea83fc203ebca8b02c8"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()