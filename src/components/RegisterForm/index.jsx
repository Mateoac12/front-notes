import useCreateUser from 'hooks/useCreateUser'
import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { handleCheckForm } from './handleCheckForm'
import { RegisterContainer, PrincipalTitle, Title, Description, Form, Label, Inputs, ButtonSubmit } from './styles'

export const RegisterForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [firstPassword, setFirstPassword] = useState('')
  const [secondPassword, setSecondPassword] = useState('')
  const [hadError, setHadError] = useState(false)

  const _useCreateUser = useCreateUser
  const [, setLocation] = useLocation()

  const handleSetName = e => setName(e.target.value)
  const handleSetUsername = e => setUsername(e.target.value)
  const handleSetFirstPassword = e => setFirstPassword(e.target.value)
  const handleSetSecondPassword = e => setSecondPassword(e.target.value)

  const handleRegister = (e) => {
    e.preventDefault()
    hadError
      ? handleCheckForm({ firstPassword, secondPassword, setHadError })
      : _useCreateUser({ name, username, password: firstPassword })
        .then(data => {
          typeof data === 'undefined'
            ? setHadError(true)
            : setLocation('/created-user')
        })
  }

  return (
    <RegisterContainer onSubmit={handleRegister}>
      <PrincipalTitle>Registrarse a <Title>Notefy</Title> para comenzar a escribir tus notas!</PrincipalTitle>
      <Description>Todo con una bonita interfaz ✨</Description>
      <Form>
        <Label htmlFor="name">Nombre:</Label>
        <Inputs
          type="text"
          id="name"
          onChange={handleSetName}
          value={name}
        />

        <Label htmlFor="username">Nombre de usuario:</Label>
        <Inputs
          type="text"
          id="username"
          onChange={handleSetUsername}  
          value={username}
        />

        <Label htmlFor="firstPassword">Contrasena:</Label>
        <Inputs
          type="password"
          id="firstPassword"
          onChange={handleSetFirstPassword}
          value={firstPassword}
        />

        <Label htmlFor="secondPassword">Repite la Contrasena:</Label>
        <Inputs
          type="password"
          id="secondPassword"
          onChange={handleSetSecondPassword}
          value={secondPassword}
        />

        {
          hadError && <h1>Errores por todos ladoooos</h1>
        }

        <ButtonSubmit>Registrarse!</ButtonSubmit>
      </Form>
    </RegisterContainer>
  )
}

export default RegisterForm
