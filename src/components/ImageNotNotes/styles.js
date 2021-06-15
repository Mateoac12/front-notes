import styled from '@emotion/styled'
import { bigMobile, desktop, tablet } from 'styles/mixins'

export const Image = styled.svg`
  width: auto;
  max-width: 717px;
  height: 438px;

  @media (max-width: ${desktop}) {
    width: 100%;
  }

  @media (max-width: ${tablet}) {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${bigMobile}) {
    width: auto;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`
