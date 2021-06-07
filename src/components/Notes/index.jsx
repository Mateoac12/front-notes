import LandingPage from "components/LandingPage"
import Note from "components/Note"
import Toggable from "components/Toggable"
import { useEffect, useState } from "react"
import { create, getAll } from "services/notes"

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

  return <>
    {
      window.localStorage.getItem('token') === null
        ? <LandingPage />
        : <div>
          <Toggable buttonLabel={'➕'}>
            <form onSubmit={handleCreateNote}>
              <input type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
              <textarea cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
              <button>Crear nota</button>
            </form>
            {notes.map(note => <Note note={note} key={note.id} />)}
          </Toggable>
        </div>
    }
    
  </>
}

export default Notes
