import React, { useEffect, useState } from 'react'
import { getAll } from "services/notes"
import Note from "components/Note"

import { NotesContainer } from './styles'
import PageNotNotes from 'components/PageNotNotes'

const ListOfNotes = () => {
  const [notes = [], setNotes] = useState([])

  useEffect(() => {
    getAll()
      .then(setNotes)
    }, [])
  return <NotesContainer>
    {
      notes.length
        ? notes.map(note => <Note note={note} key={note.id} />)
        : <PageNotNotes />
    }
  </NotesContainer>
}

export default ListOfNotes
