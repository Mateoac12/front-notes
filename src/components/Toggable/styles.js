import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'
import { popupScale } from 'styles/animations'

export const Button = styled.button`
  background-color: ${GlobalStyles.secondary};
  color: ${GlobalStyles.white};
  border: none;
  padding: .5rem 1.5rem;
  font-size: 16px;
  font-weight: 200;
  border-radius: 50px 50px 10px 50px;
  transform: scale(1);
  cursor: pointer;
  
  &:hover { 
    background-color: ${GlobalStyles.white};
    color: ${GlobalStyles.secondary};
    animation: .3s popupScale ease-in-out;
  }

  ${popupScale()}
`

export const ToggableContainer = styled.div`
  position: relative;
`

export const Modal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(100% + 2px);
  right: 0;
  padding: 1.5rem;
  background-color: ${GlobalStyles.whiteTransparent};
  backdrop-filter: blur(4px);
  box-shadow: 1px -1px 5px ${GlobalStyles.lightGray};
  border-radius: 20px 5px 20px 20px;
`

export const CancelButton = styled.button`
  background-color: ${GlobalStyles.black};
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  color: white;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover {
    animation: .3s popupScale ease-in-out;
  }

  ${popupScale()}
`