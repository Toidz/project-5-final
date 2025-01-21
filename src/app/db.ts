import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA8Xs4-jcSHhcv8vlWNpWFhxYioski9O0g",
  authDomain: "project-song-a11c0.firebaseapp.com",
  databaseURL: "https://project-song-a11c0-default-rtdb.firebaseio.com",
  projectId: "project-song-a11c0",
  storageBucket: "project-song-a11c0.firebasestorage.app",
  messagingSenderId: "1043191236267",
  appId: "1:1043191236267:web:61e4ad4b67e75da39a99ee"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const authFirebase = getAuth(app);