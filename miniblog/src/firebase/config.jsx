import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCsodRbZQfunWpHo3tA3jxklsJbSX42mTA",
  authDomain: "miniblog-c8872.firebaseapp.com",
  projectId: "miniblog-c8872",
  storageBucket: "miniblog-c8872.appspot.com",
  messagingSenderId: "938216213029",
  appId: "1:938216213029:web:07eaf81350f6f6697e4dcc"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };