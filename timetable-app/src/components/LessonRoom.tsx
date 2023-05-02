import React from 'react'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import { auth } from '../config/firebase'

const LessonRoom = ({ lesson, room }) => {
  return (
    <div className='rounded-md slightContrastBg p-1'>
        <p id='lessonBox' className='mainContrastText text-l lessonBox'>{lesson}</p>
        <p id='roomBox' className='lessSlightContrastText roomBox'>{room}</p>
    </div>
  )
}

export default LessonRoom
