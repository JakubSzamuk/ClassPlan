import { collection, doc, getFirestore, setDoc } from 'firebase/firestore'
import React from 'react'
import { auth } from '../config/firebase'


const db = getFirestore()
const colRef = collection(db, 'ClassCharts')


const sendForm = async () => {
  const inputCode = document.getElementById("classChartsInput")
  const inputDob = document.getElementById("birthDateInput")
  const inputField = document.getElementById("inputFieldIdentifier")
  if (inputCode.value != null && inputDob.value != null) {
    let newDoc = doc(collection(db, "ClassCharts"), `${auth.currentUser?.uid}`)
    let codeIn = inputCode.value!
    let dobIn = inputDob.value! 
    console.log("test") 
    await setDoc(newDoc, {
      Code: codeIn,
      DOB: dobIn,
      id: auth.currentUser?.uid,
    })
    window.location.reload()
  }
  else {
    return ;
  }
}




const TimetableSetup = ({secondChangeHandle}) => {
  return (
    <div className='absolute rounded-sm justify-center mt-16 w-full flex'>
      <div className='mainContrast flex rounded-md flex-col mt-32 py-9 p-8 justify-center w-3/4'>
      <p className='absolute mb-64 title text-5xl'>ClassCharts Info <span onClick={secondChangeHandle} className="material-symbols-outlined absolute rightOne text-4xl hover:cursor-pointer clicked">cancel</span></p>
        <input  className='slightContrastBg clicked title text-4xl rounded-lg mt-6 p-4 items-center' id='classChartsInput' placeholder='ClassCharts Code'></input>
        <input className='slightContrastBg clicked rounded-lg p-4 title text-2xl mt-4 items-center' id='birthDateInput' placeholder='BirthDate (YYYY-MM-DD)'></input>
        <button className='slightContrastBg clicked rounded-lg p-4 title text-2xl mt-4 items-center' onClick={sendForm}>Submit</button>
      </div>
    </div>
  )
}

export default TimetableSetup
