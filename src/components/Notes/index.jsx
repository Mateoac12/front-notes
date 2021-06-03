import Note from "components/Note"
import { useEffect, useState } from "react"
import { create, getAll } from "services/notes"

import { ListOfNotes } from './styles'

const Notes = () => {
  const [notes, setNotes] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    getAll()
      .then(setNotes)
  }, [])

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  const handleCreateNote = e => {
    e.preventDefault()
    create({ title, content })
      .then(res => console.log(res))
  }

  return <ListOfNotes>
    <form onSubmit={handleCreateNote}>
      <input type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
      <textarea cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
      <button>Crear nota</button>
    </form>
    {
      notes.map(note => <Note note={note} key={note.id} />)
    }
  </ListOfNotes>
}

export default Notes
