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
import SEO from 'components/SEO';

export const LandingPage = () => {
  return <Container>
    <SEO
      title='Home'
      description='Crea notas para poder organizarte, recordarlas y manejarte mejor en tu dia a dia'
    />
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
