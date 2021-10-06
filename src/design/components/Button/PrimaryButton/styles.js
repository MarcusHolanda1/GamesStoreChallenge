import styled from "styled-components";
import Theme from "../../../theme";

export const ButtonStyle = styled.button`
  width: 274px;
  height: 50px;
  
  text-align: center;

  background-color: ${Theme.colors.primary};
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:hover{
    background-color: ${Theme.colors.hover};
  }
`;
