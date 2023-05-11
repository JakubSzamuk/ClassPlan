import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { getAuth, signInWithPopup , signInWithRedirect, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../config/firebase"

const SignIn = () => {
  const login = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
  }
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <button onClick={login} className='mt-64 daycolor w-48 py-6 rounded-md mainContrast relative' id='signIn'>Sign In with Google</button>
    </div>
  )
}

export default SignIn
