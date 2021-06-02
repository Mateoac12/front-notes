import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Toggable = forwardRef(({ children, buttonLabel }, ref) => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  useImperativeHandle(ref, () => {
    return {
      handleShowModal
    }
  })

  return <section>
    <button onClick={handleShowModal}>{buttonLabel}</button>
    {
      showModal &&
      <article>
        <button onClick={handleShowModal}>❌</button>
        {children}
      </article>
    }
  </section>
})

export default Toggable
