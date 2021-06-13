import React from 'react'
import { Button } from './styles'
import { useLocation } from 'wouter'

export const CreateUser = () => {
  const [, setLocation] = useLocation()

  const handleOpenRegisterForm = (e) => {
    e.preventDefault()
    setLocation('/register')
  }

  return (
    <Button onClick={handleOpenRegisterForm}>¿Quieres crear una cuenta nueva?</Button>
  )
}

export default CreateUser
