// CLASE 7

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDAsyjKpPHSXk4kLJZORWLuKJqV6K84VEQ",
  authDomain: "coder-react-proyecto-db.firebaseapp.com",
  projectId: "coder-react-proyecto-db",
  storageBucket: "coder-react-proyecto-db.firebasestorage.app",
  messagingSenderId: "375633916558",
  appId: "1:375633916558:web:396aa4533412fc7bdacfdf",
};

export const app = initializeApp(firebaseConfig); // => instancia de nuestra app de firebase
