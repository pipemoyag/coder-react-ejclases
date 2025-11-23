// CLASE 7

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDpCIvhiGJzpluHVh_PHVYRXQq6B0bTirA",
  authDomain: "ejreact-db.firebaseapp.com",
  projectId: "ejreact-db",
  storageBucket: "ejreact-db.firebasestorage.app",
  messagingSenderId: "586689878638",
  appId: "1:586689878638:web:a00cc141b1e91b1756e47f",
};

export const app = initializeApp(firebaseConfig); // => instancia de nuestra app de firebase
