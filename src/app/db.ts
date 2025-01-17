import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAj58ppR2K4qsMvZew3hzzFK3RUyQsGSq4",
  authDomain: "music-37d9b.firebaseapp.com",
  databaseURL: "https://music-37d9b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "music-37d9b",
  storageBucket: "music-37d9b.firebasestorage.app",
  messagingSenderId: "335638152213",
  appId: "1:335638152213:web:c9dd5d3d177147329aba1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const authFirebase = getAuth(app);