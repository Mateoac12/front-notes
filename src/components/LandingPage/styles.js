import styled from '@emotion/styled'
import { GlobalStyles } from 'styles/globalStyles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: auto;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  place-items: center;
`

export const ImageContainer = styled.figure`
  max-width: 100%;
`

export const HeaderContainer = styled.header`
  width: 100%;
  text-align: right;
`

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 400;
`

export const ImportantWord = styled.span`
  color: ${GlobalStyles.primary};
`

export const CiteWord = styled.cite`
  margin: 0;
  font-size: 20px;
`

export const PrincipalTitle = styled.h1`
  font-size: 40px;
  margin-bottom: 60px;
  grid-column: 1 / -1;
`