import React from 'react'
import { useLocation } from 'wouter'
import { Title, LastWords } from './styles'

const Logo = () => {
  const [, setLocation] = useLocation()

  const handleGoHome = () => {
    setLocation('/')
  }

  return <Title onClick={handleGoHome}>
    Note<LastWords>fy</LastWords>
  </Title>
}

export default Logo