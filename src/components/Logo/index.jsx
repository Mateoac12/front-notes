import React from 'react'
import { useLocation } from 'wouter'
import { Title, LastWords, Image } from './styles'
import LogoImage from 'logo.svg'

const Logo = () => {
  const [, setLocation] = useLocation()

  const handleGoHome = () => {
    setLocation('/')
  }

  return <Title onClick={handleGoHome}>
    <Image src={LogoImage} alt="Logo" />
    Note<LastWords>fy</LastWords>
  </Title>
}

export default Logo   