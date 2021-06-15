import ErrorMessage from 'components/ErrorMessage'
import useCreateUser from 'hooks/useCreateUser'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'wouter'
import { RegisterContainer, PrincipalTitle, Title, Description, Form, Label, Inputs, ButtonSubmit } from './styles'

export const RegisterForm = () => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [firstPassword, setFirstPassword] = useState('')
  const [hadError, setHadError] = useState(false)

  const _useCreateUser = useCreateUser
  const [, setLocation] = useLocation()

  const handleSetName = e => setName(e.target.value)
  const handleSetUsername = e => setUsername(e.target.value)
  const handleSetFirstPassword = e => setFirstPassword(e.target.value)

  const handleRegister = (e) => {
    e.preventDefault()
    _useCreateUser({ name, username, password: firstPassword })
      .then(data => {
        typeof data.error !== 'undefined'
          ? setHadError(true)
          : setLocation('/created-user')
      })
      .catch(err => console.log({ err }))
  }

  useEffect(() => {
    hadError && (
      setTimeout(() => {
        setHadError(!hadError)
      }, 5000)
    )
  }, [hadError])

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

        {
          hadError && <ErrorMessage>Mmmm, parece que ese nombre de usuario ya existe 🤔</ErrorMessage>
        }

        <ButtonSubmit>Registrarse!</ButtonSubmit>
      </Form>
    </RegisterContainer>
  )
}

export default RegisterForm
