import { useRef, useState } from "react"
import { create } from "services/notes"
import Modal from 'components/Modal'

import { FormContainer, TitleInput, ContentInput, ButtonInput } from './styles'

const CreateNote = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const modalRef = useRef()

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  const handleCreateNote = e => {
    e.preventDefault()
    create({ title, content })
      .then(res => {
        console.log(res)
        modalRef.current.handleOpenModal()
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
