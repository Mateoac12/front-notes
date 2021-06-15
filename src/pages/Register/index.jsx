import React from 'react'

import RegisterImage from 'components/RegistrationImage'
import RegisterForm from 'components/RegisterForm'

import { RegisterContainer } from './styles'

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm />
      <RegisterImage />
    </RegisterContainer>
  )
}

export default Register
