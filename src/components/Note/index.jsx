import CancelDeleteMessage from 'components/CancelDeleteMessage'
import EditNoteModal from 'components/EditNoteModal'
import React, { useState } from 'react'
import { editNote } from 'services/notes'
import { GlobalStyles } from 'styles/globalStyles'
import { SingleNote, ButtonDelete, ButtonImportantNote, ContainerButton } from './styles'

const Note = ({ note }) => {
  const [isDelete, setIsDelete] = useState(false)
  const [isImportant, setIsImportant] = useState(note.important)
  const [openModal, setOpenModal] = useState(false)

  const handleChangeDeleteStatus = (e) => {
    e.stopPropagation()
    setIsDelete(!isDelete)
  }

  const handleChangeImportant = () => {
    const { id, title, content, important } = note
    const newNote = {
      title,
      content,
      important: !important
    }

    editNote(id, note = newNote)
      .then(({ data }) => {
        setIsImportant(data.important)
      })
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
