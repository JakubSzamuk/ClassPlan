import './App.css'

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { auth } from './config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

import Signed from './components/Signed';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { useEffect } from 'react';

const db = getFirestore()
onAuthStateChanged(auth, user => {
  if(user == null) { return; }
})


function App() {
  const [user] = useAuthState(auth)
  return (
    <div>
      {user ? <Signed /> : <SignIn />}
    </div>
  )
}

export default App
