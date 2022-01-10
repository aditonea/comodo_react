
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAlTnNvlHxfpMC_M7r4Pk7sujYgm2tT7Kg",
    authDomain: "comodo-67d58.firebaseapp.com",
    databaseURL: "https://comodo-67d58-default-rtdb.firebaseio.com",
    projectId: "comodo-67d58",
    storageBucket: "comodo-67d58.appspot.com",
    messagingSenderId: "982925535668",
    appId: "1:982925535668:web:994b25cb799e74bfd1eae1",
    measurementId: "G-NYQFJP30RT"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getDatabase(app)
