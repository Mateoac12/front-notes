import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  text-align: right;
  font-size: 12px;
  color: ${GlobalStyles.primary};
  cursor: pointer;
  transform: translateY(50%);

  &:hover {
    text-decoration: underline;
  }
`