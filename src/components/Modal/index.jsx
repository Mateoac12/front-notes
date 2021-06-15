import BackSymbol from 'components/BackSymbol'
import PlusSymbol from 'components/PlusSymbol'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import { ModalButton, ModalBackground } from './styles'

const Modal = forwardRef(({ children }, ref) => {
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => setOpenModal(!openModal)

  const handleChangeLabelOfButton = () => {
    if (window.innerWidth <= 780) {
      return openModal
      ? <BackSymbol />
      : <PlusSymbol />
    }

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
