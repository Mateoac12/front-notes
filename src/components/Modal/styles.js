import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'

export const ModalButton = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 100px;
  z-index: 5;
  border: none;
  outline: none;
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  padding: 1rem 1.5rem;
  font-size: 16px;
  border-radius: 50px 10px 10px 50px;
  cursor: pointer;
  ${popupScale}

  &:hover {
    color: ${GlobalStyles.secondary};
    background-color: ${GlobalStyles.white};
    border: 1px solid ${GlobalStyles.secondary};
    animation: popupScale .3s ease-in-out;
  }
`

export const ModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${GlobalStyles.whiteTransparent};
  backdrop-filter: blur(4px);
`