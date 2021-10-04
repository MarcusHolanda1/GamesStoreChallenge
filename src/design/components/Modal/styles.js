import styled from "styled-components";

import Theme from "../../theme"

export const ContainerModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.48); ;
  overflow: hidden;
`;

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