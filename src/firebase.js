import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC9SzON28l-q6nH6W_tuH5vnWH2rDyWAL8",
    authDomain: "react-project-fdc0c.firebaseapp.com",
    projectId: "react-project-fdc0c",
    storageBucket: "react-project-fdc0c.appspot.com",
    messagingSenderId: "818225987097",
    appId: "1:818225987097:web:dd8987bf270c040e80b488",
    measurementId: "G-R8Z90X8CDX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app