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

export const TitleForm = styled.h2`
  text-align: right;
`

export const Input = styled.input`
  margin: .5rem 0;
  padding: .5rem;
  background-color: transparent;
  border: none;
  border-bottom: 1px dashed ${GlobalStyles.black};
  outline: none;
  font-size: 14px;
  
  &:focus {
    border-bottom: 1px dashed ${GlobalStyles.secondary};
  }
`
