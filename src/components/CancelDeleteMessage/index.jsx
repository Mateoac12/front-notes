import React from 'react'
import { deleteNote } from 'services/notes'

import { ContainerMessage, ButtonsContainer, Button, Title } from './styles'

const CancelDeleteMessage = ({ note, hideMessage }) => {
  const handleRemoveNote = () => {
    deleteNote(note.id)
      .then(res => console.log(res))
  }

  return <ContainerMessage>
    <Title>Seguro lo quieres borrar?</Title>
    <ButtonsContainer>
      <Button color={'no'} onClick={hideMessage}>No</Button>
      <Button color={'yes'} onClick={handleRemoveNote}>Si</Button>
    </ButtonsContainer>
  </ContainerMessage>
}

export default CancelDeleteMessage
