import React, { useState } from 'react'
import { ModalButton, ModalBackground } from './styles'

const Modal = ({ children }) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)

  const handleChangeLabelOfButton = () => {
    return openModal
      ? 'Volver'
      : 'Nueva Nota ➕'
  }

  return <div>
    <ModalButton onClick={handleOpenModal}>{handleChangeLabelOfButton()}</ModalButton>
      {
        openModal &&
          <ModalBackground>
            {children}
          </ModalBackground>
      }
  </div>
}

export default Modal
