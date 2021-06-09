import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'

export const SingleNote = styled.article`
  position: relative;
  padding: 1rem;
  border: 1px solid ${GlobalStyles.lightGray};
  background-color: ${GlobalStyles.white};
  border-radius: 25px;
  margin: .5rem;
  min-width: 200px;
  max-width: 300px;
  box-shadow: 0 0 0 ${GlobalStyles.lightGray};
  transition: box-shadow, border .3s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 1px -1px 5px ${GlobalStyles.lightGray};
    border: 1px solid ${GlobalStyles.primary};
  }
`

export const ButtonDelete = styled.button`
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background-color: ${GlobalStyles.lightGray};
  ${popupScale};

  &:hover {
    background-color: ${GlobalStyles.red};
    animation: popupScale .3s ease-in-out;
  }

  &:active {
  } 
`