import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCLmTXni7KJ7_XRg5Ut68oh2DVf7FHJu64",
  authDomain: "medi-guard.firebaseapp.com",
  projectId: "medi-guard",
  storageBucket: "medi-guard.appspot.com",
  messagingSenderId: "26572813876",
  appId: "1:26572813876:web:e0fa641630a56239bd3c61",
  measurementId: "G-V0HDF052NT"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export{app,auth};