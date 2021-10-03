import styled from "styled-components";

import Theme from "../../theme";

export const DivCard = styled.div`

  padding: 14px 14px 10px 14px;
  margin: 0px 11px 12px 11px;

  background: ${Theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  
  /* &:hover{
    background-color: #ECE9F0;
    transform: scale(1.1);
  } */
`;

export const CardButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;

  
`

export const ImageCard = styled.img`
  width: 160px;
  height: 230px;
  
  padding-bottom:  ${Theme.spacing.n2};
`
