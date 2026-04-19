import { initializeApp, getApps, getApp } from "firebase/app";
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

// 🔥 YAHAN FIX HAI: Check karein ki app pehle se toh nahi chal raha
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getDatabase(app);

export default async function handler(req, res) {
    try {
        await remove(ref(db, 'used_ips'));
        
        return res.status(200).json({ 
            success: true, 
            message: "✅ Database wiped! Saare IPs delete ho gaye." 
        });
    } catch (error) {
        console.error("Delete Error:", error.message);
        return res.status(500).json({ 
            success: false, 
            message: "❌ Failed to delete.", 
            error: error.message 
        });
    }
}
