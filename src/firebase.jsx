// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// ​​import {
//     ​​  GoogleAuthProvider,
//     ​​  getAuth,
//     ​​  signInWithPopup,
//     ​​  signInWithEmailAndPassword,
//     ​​  createUserWithEmailAndPassword,
//     ​​  sendPasswordResetEmail,
//     ​​  signOut,
//     ​​} from "firebase/auth";
//     ​​import {
//     ​​  getFirestore,
//     ​​  query,
//     ​​  getDocs,
//     ​​  collection,
//     ​​  where,
//     ​​  addDoc,
//     ​​} from "firebase/firestore";

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// ​​const db = getFirestore(app);
// export default app;


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCGtS2xz5l7BBFw9uajIPiok_yGg9sk4rc",
    authDomain: "gdsc-ucu-chapter.firebaseapp.com",
    projectId: "gdsc-ucu-chapter",
    storageBucket: "gdsc-ucu-chapter.appspot.com",
    messagingSenderId: "732298391687",
    appId: "1:732298391687:web:fcade66dc54a2f9fb80822",
    measurementId: "G-R28BXFSHB5"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    // console.error(err);
    // alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    alert(err.message);
    if (error.code === 'auth/missing-password') {
        toast.error('Missing password');
      }
      if (error.code === 'auth/missing-email') {
        toast.error('Missing email');
      }
      if (error.code === 'auth/invalid-email') {
        toast.error('Must provide email');
      }
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found. Please check the Email');
      }
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    // console.error(error);
    // alert(error.message);
    if (error.code === 'auth/missing-password') {
        toast.error('Missing password');
      }
      if (error.code === 'auth/invalid-email') {
        toast.error('Must provide email');
      }
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already in use');
      }
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};