import styled from "styled-components";
import Theme from "../../../theme";

export const ButtonStyle = styled.button`
  width: 274px;
  height: 48px;

  background-color: ${Theme.colors.primary};
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${Theme.colors.hover};
  }
`;
