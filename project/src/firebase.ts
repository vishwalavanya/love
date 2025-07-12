// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCJB10ot9q_6KpI_borDB987gZWuidX40I",
  authDomain: "vishwanavya-72a92.firebaseapp.com",
  projectId: "vishwanavya-72a92",
  storageBucket: "vishwanavya-72a92.appspot.com",
  messagingSenderId: "34331683691",
  appId: "1:34331683691:web:09cd70702c7f70dd83fa2e"
};

// init
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// request push‑notification permission & token
export const requestFCMToken = async () =>
  await getToken(messaging, {
    vapidKey:
      "BCDcA3m_WEZAPxGdHl9SRetRRagpM7pBDcjTkKmwkXLrHsiXseSskWKbfy6zwLvhVoCT8xe6j9ZeQt5dHaWPLh4"
  });

// foreground message listener
export const onForegroundMessage = onMessage;