import CancelDeleteMessage from 'components/CancelDeleteMessage'
import React, { useState } from 'react'
import { GlobalStyles } from 'styles/globalStyles'
import { SingleNote, ButtonDelete } from './styles'

const Note = ({ note }) => {
  const [isDelete, setIsDelete] = useState(false)

  const handleChangeDeleteStatus = () => setIsDelete(!isDelete)

  return <> 
    <SingleNote>
      <ButtonDelete onClick={handleChangeDeleteStatus}>
        <img src={`https://icongr.am/clarity/trash.svg?size=16&color=${GlobalStyles.black}`} alt="" />
      </ButtonDelete>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      {
        isDelete && <CancelDeleteMessage
          note={note}
          hideMessage={handleChangeDeleteStatus}
        />
      }
    </SingleNote>
  </>
}

export default Note
