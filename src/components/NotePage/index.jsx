import React from 'react'
import CreateNote from 'components/CreateNote'
import ListOfNotes from 'components/ListOfNotes'

import { Container } from './styles'

const NotePage = () => {
  return <>
  <Container>
    <CreateNote />
    <ListOfNotes />
  </Container>
  </>
}

export default NotePage