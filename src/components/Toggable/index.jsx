import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { PrincipalButton, Modal } from './styles'

const Toggable = forwardRef(({ children, buttonLabel }, ref) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  useImperativeHandle(ref, () => {
    return {
      handleShowModal
    }
  })

  return <>
    <PrincipalButton onClick={handleShowModal}>{buttonLabel}</PrincipalButton>
    {
      showModal &&
      <Modal>
        <article>
          <button onClick={handleShowModal}>❌</button>
          {children}
        </article>
      </Modal>
    }
  </>
})

export default Toggable
