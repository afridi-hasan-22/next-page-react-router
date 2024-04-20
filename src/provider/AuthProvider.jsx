import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, onAuthStateChanged } from "firebase/auth";
import app from '../firebase/firebase.config'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
  const auth = getAuth(app)
const [user, setUser] = useState(null);
const [loader, setLoader] = useState(true)

const createUser = (email,password) => {
  setLoader(true)
  return createUserWithEmailAndPassword(auth,email,password);
}
const signInUser = (email, password) => {
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password);
}
const logOut = () => {
  return signOut(auth)
}

  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log('auth state changed', currentUser);
      setUser(currentUser);
      setLoader(false)
    });
    return () => {
      return unSubscribe()
    }
  },[])

  const authInfo = {
    user,
    createUser,
    signInUser,
    logOut,
    loader
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <ToastContainer></ToastContainer>
    </AuthContext.Provider>
  );
};

export default AuthProvider;