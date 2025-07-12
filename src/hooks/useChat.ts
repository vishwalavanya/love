// src/hooks/useChat.ts
import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
  deleteDoc,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase";

const COL = "messages";

export function useChat(nickname: "Vishwa" | "Navya") {
  const [msgs, setMsgs] = useState([]);

  // realtime listener
  useEffect(() => {
    const q = query(collection(db, COL), orderBy("ts", "asc"));
    return onSnapshot(q, snap =>
      setMsgs(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
  }, []);

  // send a message
  const send = async (text: string, isReply: boolean = false) =>
    await addDoc(collection(db, COL), {
      by: nickname,
      text,
      isReply,
      ts: serverTimestamp()
    });

  // clear chat
  const clear = async () => {
    const all = await getDocs(collection(db, COL));
    all.forEach(d => deleteDoc(d.ref));
  };

  return { msgs, send, clear };
}