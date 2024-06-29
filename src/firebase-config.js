import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUKVa8CQ7voC8EwhxnH6TuQmUiDVfTt4s",
  authDomain: "jiggs-62bf9.firebaseapp.com",
  projectId: "jiggs-62bf9",
  storageBucket: "jiggs-62bf9.appspot.com",
  messagingSenderId: "25572381383",
  appId: "1:25572381383:web:d917caea4df376c32fa4e2",
  measurementId: "G-1NQLW36RMT",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const upload = async (file, currentUser, setLoading) => {
  const fileRef = ref(storage, currentUser.uid);
  setLoading(true);
  const snapshot = uploadBytes(fileRef, file);
  setLoading(false);
  toast.success("file uploaded successfully");
};
export const db = getFirestore(app);