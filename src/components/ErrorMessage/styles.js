import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'

export const Message = styled.p`
  font-weight: 600;
  font-size: 18px;
  padding: 1rem 2rem;
  border-radius: 25px;
  background-color: ${GlobalStyles.whiteTransparent};
  color: ${GlobalStyles.black};
  border: 1px solid ${GlobalStyles.primary};
`