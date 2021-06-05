import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { popupScale } from 'styles/animations'

export const LoginButton = styled.button`
  display: block;
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  padding: .5rem 2rem;
  border: 0;
  border-radius: 50px 10px 50px 50px;
  cursor: pointer;
  margin-left: auto;
  
  &:hover {
    background-color: ${GlobalStyles.white};
    color: ${GlobalStyles.secondary};
    border: 1px solid ${GlobalStyles.secondary};
    animation: .3s popupScale ease-in-out;
  }

  ${popupScale}
  `

export const FormLogin = styled.form`
  margin: 1rem 0;
`