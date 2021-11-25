// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {GoogleAuthProvider, getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM0uFUZAH-cFU75vr0kQszxqO0LhwO0DY",
  authDomain: "uber-next-clone-4a5db.firebaseapp.com",
  projectId: "uber-next-clone-4a5db",
  storageBucket: "uber-next-clone-4a5db.appspot.com",
  messagingSenderId: "618946680294",
  appId: "1:618946680294:web:3567ada96fa4526572f227"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()
const auth = getAuth()


export {app, provider, auth}