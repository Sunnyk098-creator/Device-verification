// Is file ko chalane ke liye pehle terminal mein run karein: 
// npm install firebase

import { initializeApp } from "firebase/app";
import { getDatabase, ref, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCGUOPsQ4ALJy05iyIuBLbNsu-2gARnDrw",
    authDomain: "refer-zone-b9e48.firebaseapp.com",
    databaseURL: "https://refer-zone-b9e48-default-rtdb.firebaseio.com",
    projectId: "refer-zone-b9e48",
    storageBucket: "refer-zone-b9e48.firebasestorage.app",
    messagingSenderId: "1024531611430",
    appId: "1:1024531611430:web:bf52da491c3932b93e4be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

console.log("Database se IPs delete ho rahe hain...");

// IPs delete karne ka function
remove(ref(db, 'used_ips'))
    .then(() => {
        console.log("✅ Successfully wiped! Saare IPs delete ho gaye.");
        process.exit(0); // Script successfully band karein
    })
    .catch((error) => {
        console.error("❌ Delete karne mein error aayi:", error.message);
        process.exit(1);
    });
