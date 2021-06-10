import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'

export const HeaderStyle = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: .5rem 0;
  background-color: ${GlobalStyles.header};
  z-index: 20;
`