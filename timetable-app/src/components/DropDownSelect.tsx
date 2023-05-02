import React from 'react'

const DropDownSelect = ({setValue, setChangeT, setChangeN}) => {
  return (
    <div className='absolute rounded-sm justify-center mt-16 w-full flex'>
      <div className='mainContrast flex rounded-md flex-col mt-32 py-9 p-8 justify-center w-3/4'>
      <p className='absolute mb-44 ml-2 title text-5xl'>New File <span onClick={setValue} className="material-symbols-outlined absolute ml-20 -top-2 text-4xl hover:cursor-pointer clicked">cancel</span></p>
        <button onClick={setChangeT}  className='slightContrastBg clicked title text-4xl rounded-lg mt-6 p-4 items-center'>Timetable</button>
        <button onClick={setChangeN} className='slightContrastBg clicked rounded-lg p-4 title text-4xl mt-4 items-center'>Notes</button>
      </div>
    </div>
  )
}

export default DropDownSelect
