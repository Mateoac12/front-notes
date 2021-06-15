import React from 'react'

import RegisterImage from 'components/RegistrationImage'
import RegisterForm from 'components/RegisterForm'

import { RegisterContainer } from './styles'
import SEO from 'components/SEO'

const Register = () => {
  return (
    <RegisterContainer>
      <SEO
        title='Registrarse'
        description='Registrate a Notefy para empezar a organizar tus dias'
      />
      <RegisterForm />
      <RegisterImage />
    </RegisterContainer>
  )
}

export default Register
