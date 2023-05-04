import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore'
import React, { useEffect } from 'react'
import NoteFile from './NoteFile'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth } from '../config/firebase'


const db = getFirestore()

const colRefNote = collection(db, 'Notes')
// const qu = query(colRefNote, where("id", "==", `${auth.currentUser!.uid!}`))
const qu = query(colRefNote, where("id", "==", `v5`))
const querySnapshot = await getDocs(qu)
const list = document.querySelector("ul");


const Notes = () => {
  return (
    <ul className='mt-6'>
       {querySnapshot.docs.map(doc => <NoteFile body={doc.get("Body")} date={doc.get("Date")} /> )}
    </ul>
  )
}

export default Notes
