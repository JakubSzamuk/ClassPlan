import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import NoteFile from './NoteFile'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth';



var querySnapshotNote = "PlaceholderText"
const Notes = () => {
  var queryCreated
  const database = getFirestore()
  const colReferenceNote = collection(database, 'Notes')
  queryCreated = query(colReferenceNote, where("id", "==", `${auth.currentUser?.uid}`))

  const [notesTwo] = useCollectionData(queryCreated)
  return (
    <ul className='mt-6'>
      {notesTwo && notesTwo.map(nt => <NoteFile body={nt.Body} date={nt.Date} />)}
    </ul>
  )
}

export default Notes
