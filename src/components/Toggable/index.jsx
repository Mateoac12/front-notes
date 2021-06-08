import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Button , Modal, ToggableContainer, CancelButton } from './styles'

const Toggable = forwardRef(({ children, buttonLabel }, ref) => {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(!showModal)

  useImperativeHandle(ref, () => {
    return {
      handleShowModal
    }
  })

  return <ToggableContainer>
    <Button onClick={handleShowModal}>{buttonLabel}</Button>
    {
      showModal &&
      <Modal>
        <article>
          <CancelButton onClick={handleShowModal}>✖</CancelButton>
          {children}
        </article>
      </Modal>
    }
  </ToggableContainer>
})

export default Toggable
