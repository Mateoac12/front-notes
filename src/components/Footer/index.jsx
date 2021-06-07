import React from 'react'
import { SocialLinks } from 'config/links'
import ListOfLinks from 'components/ListOfLinks'

import { FooterContainer } from './styles'

const Footer = () => {
  return <FooterContainer>
    {
      SocialLinks.map(({ imgURL, link, name }) => <ListOfLinks
        img={imgURL}
        link={link}
        name={name}
      />)
    }
  </FooterContainer>
}

export default Footer
