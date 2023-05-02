import React, { createElement, useEffect, useState } from 'react'
import { getFirestore, collection, getDocs, query, where, QuerySnapshot, doc } from 'firebase/firestore';
import { auth } from '../config/firebase'
import LessonRoom from './LessonRoom';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import { useAuthState } from 'react-firebase-hooks/auth';
import { onAuthStateChanged } from 'firebase/auth';


const db = getFirestore()
const colRef = collection(db, 'ClassCharts')
// const q = query(colRef, where("id", "==", `${auth.currentUser?.uid}`))
const q = query(colRef, where("id", "==", `v5`))
const querySnapshot = await getDocs(q)
var ClassCode:string
var DateOfBirth:string
querySnapshot.forEach((doc) => {
  ClassCode = doc.get("Code")
  DateOfBirth = doc.get("DOB")
});
const Timetable = () => {
  
  const [jsonData, setJsonData] = useState([])

    useEffect(() => {
      if (ClassCode != null && DateOfBirth != null) {
        fetch("https://localhost:4000/api", {
          method: 'POST',
          headers: new Headers({
            "classCode" : ClassCode!,
            "dateOfBirth" : DateOfBirth!,
          })
        }).then(response => response.json()).then(data =>setJsonData(data))
        console.log(jsonData)
      }
      }, ClassCode)


  return (
    <div>
        <div className='flex-row flex mt-2 justify-evenly'>
            <div className='dayColor'>Mon</div>
            <div className='dayColor'>Tue</div>
            <div className='dayColor'>Wed</div>
            <div className='dayColor'>Thur</div>
            <div className='dayColor'>Fri</div>
        </div>
        <div id='insertTemplate' className='grid grid-flow-col grid-rows-6 grid-cols-5 gap-1 ml-6 w-11/12'>
          {querySnapshot.docs.map(doc => <LessonRoom lesson={doc.get("Lesson")} room={doc.get("Room")} /> )}
        </div>
    </div>
  )
}

export default Timetable
