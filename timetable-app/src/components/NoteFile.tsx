import React from 'react'

const NoteFile = ({body, date}) => {
  return (
    <div className='p-4 slightContrastBg rounded-md flex-grow shadow-md'>
      <p className='mainContrastText text-xl'>{body}</p>
      <p className='dayColor italic lessSlightContrastText'>{date}</p>
    </div>
  )
}

export default NoteFile
