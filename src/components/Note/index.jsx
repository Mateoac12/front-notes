import React, { useState } from 'react'
import useEditNote from 'hooks/useEditNote'

import CancelDeleteMessage from 'components/CancelDeleteMessage'
import EditNoteModal from 'components/EditNoteModal'

import { GlobalStyles } from 'styles/globalStyles'
import { SingleNote, ButtonDelete, ButtonImportantNote, ContainerButton } from './styles'

const Note = ({ note }) => {
  const _useEditNote = useEditNote

  const [isDelete, setIsDelete] = useState(false)
  const [isImportant, setIsImportant] = useState(note.important)
  const [openModal, setOpenModal] = useState(false)

  const handleChangeDeleteStatus = (e) => {
    e.stopPropagation()
    setIsDelete(!isDelete)
  }

  const handleChangeImportant = (e) => {
    e.stopPropagation()
    _useEditNote({
      title: note.title,
      content: note.content,
      important: !note.important,
      id: note.id
    })
    .then(({ important }) => 
      setIsImportant(important)
    )
  }

  const handleOpenEditNote = () => setOpenModal(!openModal)

  return <> 
    <SingleNote onClick={handleOpenEditNote}>
      <ContainerButton>
        <ButtonDelete onClick={handleChangeDeleteStatus}>
          <img src={`https://icongr.am/clarity/trash.svg?size=16&color=${GlobalStyles.black}`} alt="" />
        </ButtonDelete>
        <ButtonImportantNote
          isImportant={isImportant}
          onClick={handleChangeImportant}
        />
      </ContainerButton>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {
        isDelete && <CancelDeleteMessage
          note={note}
          hideMessage={handleChangeDeleteStatus}
        />
      }
    </SingleNote>
    {
      openModal && <EditNoteModal changeModalState={handleOpenEditNote} note={note} />
    }
  </>
}

export default Note
