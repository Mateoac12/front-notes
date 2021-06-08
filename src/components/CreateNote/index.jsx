import { useState } from "react"
import { create } from "services/notes"
import Modal from 'components/Modal'

const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  const handleCreateNote = e => {
    e.preventDefault()
    create({ title, content })
      .then(res => console.log(res))
  }
  
  return <div>
    <Modal>
      <form onSubmit={handleCreateNote}>
        <input type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
        <textarea cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
        <button>Crear nota</button>
      </form>
    </Modal>
  </div>
}

export default CreateNote
