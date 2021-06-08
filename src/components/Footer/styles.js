import styled from '@emotion/styled'
import { tablet } from 'styles/mixins'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;

  @media (max-width: ${tablet}) {
    flex-wrap: wrap;
    position: relative;
    margin-top: 200px;
  }
`