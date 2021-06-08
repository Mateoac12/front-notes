import React, { useEffect, useState } from 'react'
import { getAll } from "services/notes"
import Note from "components/Note"

import { NotesContainer } from './styles'

const ListOfNotes = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getAll()
      .then(setNotes)
    }, [])

  return <NotesContainer>
    {
      notes.map(note => <Note note={note} key={note.id} />)
    }
  </NotesContainer>
}

export default ListOfNotes
