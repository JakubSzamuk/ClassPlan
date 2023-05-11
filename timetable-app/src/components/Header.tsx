import React from 'react'
import { useState } from 'react'
import DropDownSelect from './DropDownSelect'
import TimetableSetup from './TimetableSetup'
import NoteMenuSetup from './NoteMenuSetup'
import SettingsMenu from './SettingsMenu'

const Header = () => {

  const [menuDown, setMenuDown] = useState(false)
  const [timetableMenu, setTimetableMenu] = useState(false)
  const [noteMenu, setNoteMenu] = useState(false)
  const [settingsMenu, setSettingsMenu] = useState(false)
  const stopSettings = () => {
    setSettingsMenu(!settingsMenu)
  }
  const handleChange = () => {
    setMenuDown(false)
    setSettingsMenu(false)
  }
  const openTimetable = () => {
    setMenuDown(false)
    setTimetableMenu(!timetableMenu)
    setSettingsMenu(false)
  }
  const openNote = () => {
    setMenuDown(false)
    setNoteMenu(!noteMenu)
    setSettingsMenu(false)
  }
  return (
    <div className='flex flex-row mainContrast pb-4 align-middle'>
      <h1 className='mt-6 ml-4 text-6xl brightContrast title'>ClassPlan</h1>
      <button id='dropIt' onClick={() => {setMenuDown(!menuDown); setSettingsMenu(false)}} className='clicked mt-4 ml-4 text-3xl brightContrastButtonOne p-5 py-2 rounded-md'><span id='rotateMe' className="material-symbols-outlined text-3xl">add</span></button>
      {menuDown ? <DropDownSelect setChangeN={openNote} setChangeT={openTimetable} setValue={handleChange} /> : null}
      {timetableMenu ? <TimetableSetup secondChangeHandle={openTimetable} /> : null}
      {noteMenu ? <NoteMenuSetup changeHandler={openNote} /> : null}
      <button className='clicked mt-4 ml-4 text-3xl border-solid border-2 brightContrastButtonTwo mr-4 p-5 py-2 rounded-md' onClick={() => {setSettingsMenu(!settingsMenu); setMenuDown(false); setNoteMenu(false); setTimetableMenu(false) }}><span className="material-symbols-outlined">settings</span></button>
      {settingsMenu ? <SettingsMenu stopIt={stopSettings} /> : null}
    </div>
  )
}

export default Header
