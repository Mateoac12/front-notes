import React, { useState } from 'react'
import { create } from 'services/notes'

const CreateNote = ({ onCreate }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSetTitle = e => setTitle(e.target.value)
  const handleSetContent = e => setContent(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    create({
      name: "Madeval",
      title: title,
      content: content,
      important: false
    }).then(onCreate)
  }

  return <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="title"></label>
      <input
        id="title"
        onChange={handleSetTitle}
        placeholder="Titulo..."
        type="text"
        value={title}
      />
      <label htmlFor="content"></label>
      <input
        id="content"
        onChange={handleSetContent}
        placeholder="Comprar patatas..."
        type="text"
        value={content}
      />
      <button>Crear</button>
    </form>
  </>
}

export default CreateNote