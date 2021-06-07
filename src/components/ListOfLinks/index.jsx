import React from 'react'
import { BlockImage, Title, Link } from './styles'

const ListOfLinks = ({ img, name, link }) => {
  return <>
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <BlockImage>
        <img src={img} alt={`${name} Icon`} />
        <Title>{name}</Title>
      </BlockImage>
    </Link>
  </>
}

export default ListOfLinks
