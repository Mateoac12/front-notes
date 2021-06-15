import React from 'react'
import { SocialLinks } from 'config/links'
import ListOfLinks from 'components/ListOfLinks'

import { FooterContainer, Text } from './styles'

const Footer = () => {
  return <FooterContainer>
    <Text>Creado con mucho ♥ por: </Text>
    {
      SocialLinks.map(({ imgURL, link, name }) => <ListOfLinks
        key={name}
        img={imgURL}
        link={link}
        name={name}
      />)
    }
  </FooterContainer>
}

export default Footer
