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
  box-shadow: 0 0 0 ${GlobalStyles.lightGray};
  transition: box-shadow, border .3s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 1px -1px 5px ${GlobalStyles.lightGray};
    border: 1px solid ${GlobalStyles.primary};
  }
`

export const ContainerButton = styled.div`
  display: flex;
  justify-content: space-between;
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
`

export const ButtonImportantNote = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  outline: none;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  cursor: pointer;
  ${popupScale};
  ${props => {
    if (props.isImportant) return `background-color: ${GlobalStyles.primary};`
    return `background-color: ${GlobalStyles.lightGray};`
  }}

  &:hover {
    ${props => {
      if (props.isImportant) return `background-color: ${GlobalStyles.lightGray};`
      return `background-color: ${GlobalStyles.primary};`
    }}
    animation: popupScale .3s ease-in-out;
  }
`