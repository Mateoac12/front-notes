import { useContext, useRef, useState } from "react"
import Modal from 'components/Modal'

import { FormContainer, TitleInput, ContentInput, ButtonInput } from './styles'
import useCreateNote from "hooks/useCreateNote"
import { ContextNotes } from "context/contextNotes"

const CreateNote = () => {
  const _useCreateNote = useCreateNote
  const { setAllNotes } = useContext(ContextNotes)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const modalRef = useRef()

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  const handleCreateNote = e => {
    e.preventDefault()
    _useCreateNote({ title, content, modalRef })
      .then(data => {
        setAllNotes(lastnotes => lastnotes.concat(data))
      })
  }
  
  return <>
    <Modal ref={modalRef}>
      <FormContainer onSubmit={handleCreateNote}>
        <TitleInput type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
        <ContentInput cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
        <ButtonInput>Crear nota</ButtonInput>
      </FormContainer>
    </Modal>
  </>
}

export default CreateNote
