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
type Lesson = {name: string; room: string}
type Day = Lesson[]
// const q = query(colRef, where("id", "==", `${auth.currentUser?.uid}`))
const q = query(colRef, where("id", "==", `v5`))
const querySnapshot = await getDocs(q)
var ClassCode:string
var DateOfBirth:string
querySnapshot.forEach((doc) => {
  ClassCode = doc.get("Code")
  DateOfBirth = doc.get("DOB")
});
var timetableInfo:Array
const Timetable = () => {

  const [days, setDays] = useState<Day[]>([])
    useEffect(() => {
      if (ClassCode != null && DateOfBirth != null) {
        fetch("https://localhost:4000/api", {
          method: 'POST',
          headers: new Headers({
            "classCode" : ClassCode!,
            "dateOfBirth" : DateOfBirth!,
          })
        }).then(response => {
          return response.json()
        }).then(data => {
          setDays(data as Day)
        })
      }
      }, [ClassCode, DateOfBirth])
  return (
    <div>
        <div id='insertTemplate' className='grid grid-rows-1 grid-cols-5 gap-5 ml-1 w-11/12'>  
          <div className='grid gap-1 place-content-start'>
            <div className='dayColor text-center'>Mon</div>
            {days[0] ? days[0].map(lesson => {
              return <LessonRoom lesson={lesson.name} room={lesson.room} />
            }) : null }
          </div>
          <div className='grid gap-1 place-content-start'>
          <div className='dayColor text-center'>Tue</div>
            {days[1] ? days[1].map(lesson => {
              return <LessonRoom lesson={lesson.name} room={lesson.room} />
            }) : null }
          </div>
          <div className='grid gap-1 place-content-start'>
            <div className='dayColor text-center'>Wed</div>
            {days[2] ? days[2].map(lesson => {
              return <LessonRoom lesson={lesson.name} room={lesson.room} />
            }) : null }
          </div>
          <div className='grid gap-1 place-content-start'>
            <div className='dayColor text-center'>Thur</div>
            {days[3] ? days[3].map(lesson => {
              return <LessonRoom lesson={lesson.name} room={lesson.room} />
            }) : null }
          </div>
          <div className='grid gap-1 place-content-start'>
            <div className='dayColor text-center'>Fri</div>
            {days[4] ? days[4].map(lesson => {
              return <LessonRoom lesson={lesson.name} room={lesson.room} />
            }) : null }
          </div>
        </div>
    </div>
  )
}

export default Timetable
