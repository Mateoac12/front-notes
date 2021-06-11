import useEditNote from 'hooks/useEditNote'
import React, { useState } from 'react'
import { ModalContainer, FormContainer, TitleInput, ContentInput, ButtonInput, BackButton } from './styles'

const EditNoteModal = ({ changeModalState, note }) => {
  const _useEditNote = useEditNote

  const [title, setTitle] = useState(note.title)
  const [content, setContent] = useState(note.content)

  const handleChangeTitle = e => setTitle(e.target.value)
  const handleChangeContent = e => setContent(e.target.value)

  const handleUpdateNote = () => {
    _useEditNote({
      title,
      content,
      important: note.important,
      id: note.id
    })
  }

  return <ModalContainer>
    <BackButton onClick={changeModalState}>
      <img src='https://icongr.am/entypo/chevron-small-left.svg?size=20&color=ffffff' alt="Back" />
    </BackButton>
    <FormContainer onSubmit={handleUpdateNote}>
      <TitleInput type="text" placeholder='Titulo...' value={title} onChange={handleChangeTitle} />
      <ContentInput cols="30" rows="10" placeholder="Patatas con chocolate..." value={content} onChange={handleChangeContent} />
      <ButtonInput>Actualizar nota</ButtonInput>
    </FormContainer>
  </ModalContainer>
}

export default EditNoteModal
