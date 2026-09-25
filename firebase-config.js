// firebase-config.js
// Shared Firebase config for Williams Records shop + admin

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCgw596v4ArE0OBTkuqLuS-_5kkjG8Px8I",
  authDomain: "williams-records.firebaseapp.com",
  projectId: "williams-records",
  storageBucket: "williams-records.firebasestorage.app",
  messagingSenderId: "690738655899",
  appId: "1:690738655899:web:6e0342d74eba84bd5f8c3e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };