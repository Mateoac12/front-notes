import React from 'react'
import BannerCreatedUser from 'components/BannerCreatedUser'
import { Container, Title, Subtitle } from './styles'

const CreatedUser = () => {
  return <Container>
    <Title>Bienvenido!</Title>
    <Subtitle >Ya puedes logearte y crear tus notas 😁</Subtitle>
    <BannerCreatedUser />
  </Container>
}

export default CreatedUser
