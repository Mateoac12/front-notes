import React from 'react'
import useGetAllNotes from 'hooks/useGetAllNotes'

import Note from "components/Note"
import PageNotNotes from 'components/PageNotNotes'

import { NotesContainer } from './styles'

const ListOfNotes = () => {
  const { allNotes } = useGetAllNotes()
  console.log('hola', allNotes)
  return <NotesContainer>
    {
      allNotes.length
        ? allNotes.map(note => <Note note={note} key={note.id} />)
        : <PageNotNotes />
    }
  </NotesContainer>
}

export default ListOfNotes
