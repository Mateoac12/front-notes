import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'

export const RegisterContainer = styled.article`
  text-align: right;
`

export const PrincipalTitle = styled.h1`
  font-weight: 200;
  font-size: 42px;
  color: ${GlobalStyles.black};
  margin-bottom: .5rem;
`

export const Title = styled.span`
  font-weight: 400;
  color: ${GlobalStyles.primary};
`

export const Description = styled.blockquote`
  font-style: italic;
  font-size: 26px;
  font-weight: 200;
  color: ${GlobalStyles.black};
  margin-top: .5rem;
  margin-right: 0;
`

export const Form = styled.form`
  text-align: left;
  /* background-color: ${GlobalStyles.whiteTransparent}; */
  border-radius: 25px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  /* box-shadow: 1px -1px 5px ${GlobalStyles.lightGray};  */
`

export const Label = styled.label`
  font-weight: 200;
  font-size: 16px;
  color: ${GlobalStyles.black};
`

export const Inputs = styled.input`
  font-size: 22px;
  font-weight: 100;
  color: ${GlobalStyles.black};
  border: none;
  background-color: transparent;
  outline: none;
  border-bottom: 1px dashed ${GlobalStyles.black};
  margin-bottom: 1rem;
  padding: .25rem;

  &:focus {
    border-bottom: 1px dashed ${GlobalStyles.secondary};
  }
`

export const ButtonSubmit = styled.button`
  margin: 2rem 0 0;
  padding: .8rem 0;
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  outline: none;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid transparent;  
  ${popupScale}

  &:hover {
    animation: popupScale .3s ease-in-out;
    background-color: ${GlobalStyles.white};
    border: 1px solid ${GlobalStyles.secondary};
    color: ${GlobalStyles.secondary};
  }
`
