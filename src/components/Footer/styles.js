import styled from '@emotion/styled'
import { tablet } from 'styles/mixins'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  position: relative;
  left: 0;
  bottom: 5px;
  width: 100%;
  margin-top: 200px;

  @media (max-width: ${tablet}) {
    flex-wrap: wrap;
    position: relative;
    margin-top: 200px;
  }
`