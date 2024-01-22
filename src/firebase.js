import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCUS88ZX_yGyM4OsheffpVjR93ZR8FAiow",
  authDomain: "disney-plus-44eca.firebaseapp.com",
  projectId: "disney-plus-44eca",
  storageBucket: "disney-plus-44eca.appspot.com",
  messagingSenderId: "181394908124",
  appId: "1:181394908124:web:1b5cca68bcae25dc872519"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

export default app
  
