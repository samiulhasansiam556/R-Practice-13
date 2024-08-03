import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDi7U8CH6paTBX7wVJqy8iOxA4lCLm33CY",
  authDomain: "r-auth-1.firebaseapp.com",
  projectId: "r-auth-1",
  storageBucket: "r-auth-1.appspot.com",
  messagingSenderId: "1098808067435",
  appId: "1:1098808067435:web:17755a087fe17ec0de382e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
