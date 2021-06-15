import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { tablet } from 'styles/mixins'

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  left: 0;
  bottom: 5px;
  width: 100%;
  margin-top: 200px;

  @media (max-width: ${tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

export const Text = styled.p`
  color: ${GlobalStyles.black};
`