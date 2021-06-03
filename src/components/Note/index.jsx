import React from 'react'
import { deleteNote } from 'services/notes'
import { SingleNote } from './styles'

const Note = ({ note }) => {
  const handleRemoveNote = () => {
    deleteNote(note.id)
      .then(res => console.log(res))
  }

  return <SingleNote>
    <button onClick={handleRemoveNote}>Eliminar</button>
    <h2>{note.title}</h2>
    <p>{note.content}</p>
  </SingleNote>
}

export default Note
