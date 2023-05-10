import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import NoteFile from './NoteFile'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth';



var querySnapshotNote = "PlaceholderText"
const Notes = () => {
  var queryCreated
  type Note = {Body: string, Date: string}
  const [notes, setNotes] = useState<Note[]>([])
  onAuthStateChanged(auth, user => {
    const database = getFirestore()
    const colReferenceNote = collection(database, 'Notes')
    queryCreated = query(colReferenceNote, where("id", "==", `${auth.currentUser?.uid}`))
    const snap = async () => {
      if (querySnapshotNote === "PlaceholderText") {
        querySnapshotNote = await getDocs(queryCreated)
        let i = 0
        let notesPlural = []
        querySnapshotNote.forEach((docs) => {
          let noteSingle = {Body: docs.get("Body"), Date: docs.get("Date")}
          notesPlural[i] = noteSingle
          i++
        })
        setNotes(notesPlural as Note[])
      }
    }
    snap()
  })
  return (
    <ul className='mt-6'>
       {notes.map(doc => <NoteFile body={doc.Body} date={doc.Date} /> )}
    </ul>
  )
}

export default Notes
