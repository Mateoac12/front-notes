import React, { useState } from 'react'
import handleConnectService from './handleConnectServer'
import { useLocation } from 'wouter'

import Toggable from 'components/Toggable'
import CreateUser from 'components/CreateUser'

import {
  LoginButton,
  FormLogin,
  TitleForm,
  Input
} from './styles'


const LoginForm = ({ forwardRef, setLoggedNickname, setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState(null)

  const [, setLocation] = useLocation()

  const handleChangeUsername = e => setUsername(e.target.value)
  const handleChangePassword = e => setPassword(e.target.value)

  const handleLogin = e => {
    e.preventDefault()
    setLocation('/')
    handleConnectService({ username, password, forwardRef, setLoggedNickname, setLoginError, setToken })
    handleResetInputs()
  }

  const handleResetInputs = () => {
    setUsername('')
    setPassword('')
  }

  return <>
    <Toggable buttonLabel={'Login'} ref={forwardRef}>
      <FormLogin onSubmit={handleLogin}>
        <TitleForm>Quieres logearte?</TitleForm>
        <Input
          type="text"
          placeholder="Username..."
          value={username}
          onChange={handleChangeUsername}
        />
        <Input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={handleChangePassword}
        />
        {
          loginError && <small>{loginError}</small>
        }
        <LoginButton>Login</LoginButton>
        <CreateUser handleCloseModal={forwardRef} />
      </FormLogin>
    </Toggable>
  </>
}

export default LoginForm
