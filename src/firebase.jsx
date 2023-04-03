import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
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
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAeZGQSuwdhdSYoQlO2lBXj6JubvNp-t1c",
    authDomain: "data-science-ddebd.firebaseapp.com",
    projectId: "data-science-ddebd",
    storageBucket: "data-science-ddebd.appspot.com",
    messagingSenderId: "516618929749",
    appId: "1:516618929749:web:3d346e6f6bcf89df8936dc",
    measurementId: "G-YXCFBR7STJ"
  };

// Handling google signin
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
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
    console.error(err);
    alert(err.message);
  }
}

//function to control user login from firebase

const logInWithEmailAndPassword = async (email, password) => {
  
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
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


// Handing user registration in firestore
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
    if (error.code === 'auth/missing-password') {
        toast.error('Missing password');
      }
      if (error.code === 'auth/invalid-email') {
        toast.error('Must provide email');
      }
      // if (error.code === 'auth/email-already-in-use') {
      //   toast.error('Email already in use');
      // }
  }
};

//password reset
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


//exporting functions
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};