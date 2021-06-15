import styled from '@emotion/styled'
import { tablet } from 'styles/mixins'

export const RegisterContainer = styled.section`
  margin-top: 100px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 80vh; 

  @media (max-width: ${tablet}) {
    grid-template-columns: 1fr;
  }
`