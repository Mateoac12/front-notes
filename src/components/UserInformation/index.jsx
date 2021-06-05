import React from 'react'
import Toggable from 'components/Toggable'

import { LoginButton } from './styles'

export const UserInformation = ({ forwardRef, setIsLogged, isLogged }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('name')
    window.localStorage.removeItem('username')
    forwardRef.current.handleShowModal()
    setIsLogged(null)
  }

  return <>
    <Toggable buttonLabel={isLogged} ref={forwardRef}>
        <h1>Hola {isLogged}!</h1>
      <LoginButton onClick={handleLogout}>Cerrar sesion</LoginButton>
    </Toggable>
  </>
}

export default UserInformation
