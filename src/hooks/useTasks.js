import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../services/firebase";

export const useTasks = (userId) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!userId) return;
    const q = query(collection(db, "tasks"), where("userId", "==", userId));
    const unsub = onSnapshot(q, (snapshot) => {
      setTasks(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, [userId]);

  const addTask = async (task) => {
    await addDoc(collection(db, "tasks"), task);
  };

  const updateTask = async (id, updates) => {
    const ref = doc(db, "tasks", id);
    await updateDoc(ref, updates);
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  return { tasks, addTask, updateTask, deleteTask };
};
