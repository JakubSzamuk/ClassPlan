import React from 'react'
import Footer from './Footer'
import Timetable from './Timetable'
import Header from './Header'
import Notes from './Notes'
import { auth } from '../config/firebase'

const Signed = () => {
  return (
    <div id='rootTwo'>
      <Header />
      <Timetable />
      <Notes />
      <Footer />
    </div>
  )
}

export default Signed
