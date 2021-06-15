import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { popupScale } from 'styles/animations'

export const Link = styled.a`
  text-decoration: none;
  &:hover {
    animation: popupScale .3s ease-in-out;
  }

  ${popupScale()}
`

export const BlockImage = styled.figure`
  display: flex;
  align-items: center;
`
export const Title = styled.figcaption`
  font-size: 14px;
  outline: none;
  color: ${GlobalStyles.black};
  margin-left: .5rem;
`