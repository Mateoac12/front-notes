import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalButton, ModalBackground } from './styles'

const Modal = forwardRef(({ children }, ref) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)

  const handleChangeLabelOfButton = () => {
    return openModal
      ? 'Volver'
      : 'Nueva Nota ➕'
  }

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal
    }
  })

  return createPortal(
    <>
      <ModalButton onClick={handleOpenModal}>{handleChangeLabelOfButton()}</ModalButton>
        {
          openModal &&
            <ModalBackground>
              {children}
            </ModalBackground>
        }
    </>,
    document.getElementById('modal')
  )
})

export default Modal
