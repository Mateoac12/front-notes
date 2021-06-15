import styled from "@emotion/styled";
import { GlobalStyles } from "styles/globalStyles";

export const Symbol = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before, &::after {
    content: '';
    background-color: ${GlobalStyles.white};
  }

  &::before {
    width: 40%;
    border: 2px solid ${GlobalStyles.white};
    border-radius: 5px;
  }

  &::after {
    position: absolute;
    height: 40%;
    border: 2px solid ${GlobalStyles.white};
    border-radius: 5px;
  }
`