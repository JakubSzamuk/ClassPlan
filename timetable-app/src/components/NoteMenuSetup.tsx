import { collection, getFirestore, doc, setDoc } from 'firebase/firestore'
import React, { useRef, useState } from 'react'
import { auth } from '../config/firebase'

const db = getFirestore()
const colRef = collection(db, 'Notes')


const date = new Date


const sendForm = async () => {
  const inputField = document.getElementById("inputFieldIdentifier")
  console.log(inputField.value)
  if (inputField.value != "") {
    const actualDate = date.getDate().toString() + "/" + (date.getMonth() + 1).toString() + "/" + date.getFullYear().toString()
    let newDoc = doc(collection(db, "Notes"))
    let inputVal = inputField.value!
    console.log(inputField.value)
    inputField!.value = ""
    await setDoc(newDoc, {
      Body: inputVal,
      Date: actualDate,
      id: auth.currentUser!.uid!,
    }) 
  }
  else {
    return ;
  }
}

const NoteMenuSetup = ({changeHandler}) => {
  return (
    <div className='absolute rounded-sm justify-center mt-16 w-full flex'>
      <div className='mainContrast flex rounded-md flex-col mt-32 py-9 p-8 justify-center w-3/4'>
      <p className='absolute mb-44 ml-2 title text-5xl text-gray-300'>Enter Note <span onClick={changeHandler} className="material-symbols-outlined absolute ml-14 -top-2 text-4xl hover:cursor-pointer clicked">cancel</span></p>
        <input className='slightContrastBg clicked title text-xl rounded-lg mt-6 p-4 items-center' placeholder='eg Physics Test on Thursday' id='inputFieldIdentifier'></input>
        <button className='slightContrastBg clicked text-gray-300 rounded-lg p-4 title text-4xl mt-4 items-center' onClick={sendForm} id='submitButtonHTMLElement'>Add</button>
      </div>
    </div>
  )
}

export default NoteMenuSetup
