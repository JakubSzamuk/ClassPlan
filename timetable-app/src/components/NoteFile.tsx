import React from 'react'
import { collection, doc, deleteDoc, getFirestore, query, where, getDocs } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../config/firebase'
const db = getFirestore()
async function deleteNote(body:string) {
  const colRefNote = collection(db, 'Notes')
  const qu = query(colRefNote, where("id", "==", `${auth.currentUser!.uid!}`), where("Body", "==", `${body}`))
  const querySnapshot = await getDocs(qu)
  querySnapshot.forEach(function(document) {
    deleteDoc(doc(db, "Notes", `${document.id}`))
    deleteIt()
  })
}
const deleteIt = () => {
  document.getElementById("container")?.classList.add("hidden")
}

const NoteFile = ({body, date}) => {
  return (
    <div className='p-4 slightContrastBg rounded-md flex-grow shadow-md' id='container'>
      <p className='mainContrastText text-xl'>{body}</p>
      <p className='dayColor italic lessSlightContrastText'>{date}<span className="absolute mt-0.5 ml-2 hover:cursor-pointer material-symbols-outlined" onClick={() => {deleteNote(body)}}>delete</span></p>
    </div>
  )
}

export default NoteFile
