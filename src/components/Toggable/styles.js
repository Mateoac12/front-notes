import styled from '@emotion/styled'

export const PrincipalButton = styled.button`
  outline: none;
  border: 1px solid #171717;
  padding: .5rem 1rem;
  font-size: 16px;
  background-color: #ccc;
`

export const Modal = styled.section`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(4px);
  background-color: #17171720;
  justify-content: center;
  align-items: center;
`