import React from 'react'
import { auth } from "../config/firebase"

const SignOut = () => {
  

  return auth.currentUser && (
    <div>
        <button onClick={() => {auth.signOut()}}><span class="material-symbols-outlined">logout</span></button>
    </div>
  )
}


export default SignOut
