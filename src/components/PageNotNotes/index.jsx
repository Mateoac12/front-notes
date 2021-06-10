import React from 'react'
import ImageNotNotes from 'components/ImageNotNotes'
import { Title, ImportantText, Container } from './styles'

export const PageNotNotes = () => {
  return <Container>
    <Title>Crea una nueva <ImportantText>nota</ImportantText> para poder verlas aqui! 🐱‍👤</Title>
    <ImageNotNotes />
  </Container>
}

export default PageNotNotes
