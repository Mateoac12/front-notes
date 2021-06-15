import styled from '@emotion/styled'
import { desktop, tablet } from 'styles/mixins'

export const Banner = styled.svg`
  width: auto;
  max-width: 717px;
  height: 438px;

  @media (max-width: ${desktop}) {
    width: 100%;
  }

  @media (max-width: ${tablet}) {
    width: auto;
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`