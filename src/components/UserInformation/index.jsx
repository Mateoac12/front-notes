import React from 'react'
import Toggable from 'components/Toggable'

import { LoginButton, Title } from './styles'

export const UserInformation = ({ forwardRef, setLoggedNickname, loggedNickname, setToken }) => {
  const handleLogout = () => {
    window.localStorage.removeItem('token')
    setToken(null)
    
    window.localStorage.removeItem('name')

    window.localStorage.removeItem('username')
    forwardRef.current.handleShowModal()

    setLoggedNickname(null)
  }

  return <>
    <Toggable buttonLabel={loggedNickname} ref={forwardRef}>
        <Title>Hola {loggedNickname}!<br/>Como estas?</Title>
      <LoginButton onClick={handleLogout}>Cerrar sesion</LoginButton>
    </Toggable>
  </>
}

export default UserInformation
