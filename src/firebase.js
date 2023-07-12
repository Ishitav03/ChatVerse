// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBadq-vFZ8y91vnpBCDUgg9amBzRttM3S8",
  authDomain: "chatverse-f385c.firebaseapp.com",
  projectId: "chatverse-f385c",
  storageBucket: "chatverse-f385c.appspot.com",
  messagingSenderId: "380107266572",
  appId: "1:380107266572:web:0f296c4996b30b42b96c29"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();