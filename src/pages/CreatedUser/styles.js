import styled from "@emotion/styled";
import { bigMobile } from "styles/mixins";

export const Container = styled.section`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  display: grid;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-weight: 200;
  margin-bottom: 0;

  @media (max-width: ${bigMobile}) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 3rem;
  }
`

export const Subtitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 200;
  margin-bottom: 2em;

  @media (max-width: ${bigMobile}) {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 1.5rem;
  }
`