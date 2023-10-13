import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1goIuTiz-nhYM0jhb9ip8ox3o4v7fAwI",
  authDomain: "whatsapp-clones-e10ce.firebaseapp.com",
  projectId: "whatsapp-clones-e10ce",
  storageBucket: "whatsapp-clones-e10ce.appspot.com",
  messagingSenderId: "1041679286100",
  appId: "1:1041679286100:web:b1c353c0471d2dbf5492c1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider(app);
export const database = getFirestore(app);
