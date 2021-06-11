import React from 'react'
import useDeleteNote from 'hooks/useDeleteNote'

import { ContainerMessage, ButtonsContainer, Button, Title } from './styles'
import useGetAllNotes from 'hooks/useGetAllNotes'

const CancelDeleteMessage = ({ note, hideMessage }) => {
  const { setAllNotes } = useGetAllNotes()
  const _useDeleteNote = useDeleteNote

  const handleRemoveNote = (e) => {
    e.stopPropagation()
    _useDeleteNote({ id: note.id })
      .then(() => setAllNotes(lastNotes => lastNotes.filter(({ id }) => id !== note.id)))
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
