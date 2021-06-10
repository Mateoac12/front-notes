import React from 'react'
import BannerImage from 'components/BannerImage'
import Typist from 'react-text-typist';

import {
  CiteWord,
  Container,
  HeaderContainer,
  ImageContainer,
  ImportantWord,
  PrincipalTitle,
  Title,
  ImportantColor
} from './styles'

export const LandingPage = () => {
  return <Container>
    <PrincipalTitle>
      Con <ImportantColor>Notefy</ImportantColor>
      <Typist
        sentences={[' Escribi!', ' Recorda!', ' Organiza!']}
        deletingSpeed={100}
        loop={false}
      />
    </PrincipalTitle>
    <ImageContainer>
      <BannerImage />
    </ImageContainer>
    <HeaderContainer>
      <Title>Recuerda lo que es importante<br/><ImportantWord>para ti</ImportantWord> y para los <ImportantWord>demas!</ImportantWord></Title>
      <CiteWord>Notefy</CiteWord>
    </HeaderContainer>
  </Container>
}

export default LandingPage
