import styled from '@emotion/styled'
import { popupScale } from 'styles/animations'
import { GlobalStyles } from 'styles/globalStyles'

export const ContainerMessage = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${GlobalStyles.whiteTransparent};
  backdrop-filter: blur(4px);
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  font-weight: 400;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`

export const Button = styled.button`
  padding: .5rem 1.5rem;
  border: none;
  border-radius: 25px;
  min-width: 80px;
  ${props => {
    if (props.color === 'no') return `background-color: ${GlobalStyles.red};`
    return `background-color: ${GlobalStyles.green};`
  }}
  cursor: pointer;
  font-size: 16px;
  ${popupScale}

  &:hover {
    animation: popupScale .3s ease-in-out;
  }
` 
