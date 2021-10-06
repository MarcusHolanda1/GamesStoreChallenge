import styled from "styled-components";

import Theme from "../../../theme";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 14px 10px 14px;

  background: ${Theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
`;

export const CardButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  
`

