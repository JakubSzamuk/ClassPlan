import React from 'react'
import { auth } from '../config/firebase'

const SettingsMenu = ({ stopIt }) => {
  return (
    <div className='absolute rounded-sm justify-center mt-16 w-full flex'>
      <div className='mainContrast flex rounded-md flex-col mt-32 py-9 p-8 justify-center w-3/4'>
        <p className='absolute mb-24 ml-2 title text-5xl'>Settings <span onClick={stopIt} className="material-symbols-outlined absolute ml-20 -top-2 text-4xl hover:cursor-pointer clicked">cancel</span></p>
        <button onClick={() => {auth.signOut()}} className='slightContrastBg clicked title text-4xl rounded-lg mt-6 p-4 items-center'>Logout</button>
      </div>
    </div>
  )
}

export default SettingsMenu
