import styled from "styled-components";

import Theme from "../../theme";

import { IoMdStar } from "react-icons/io";

export const ContainerModal = styled.section`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.48);;

    

`
export const Image = styled.img` ///Enquanto src não estava vindo do component

  width: 160px;
  height: 267px;
  
  padding-bottom:  ${Theme.spacing.n2};
  margin-top:  ${Theme.spacing.n4};
`

export const Star = styled(IoMdStar)`

    color: ${Theme.colors.primary};
    font-size: 26px;

    margin-top:  ${Theme.spacing.n1};
`;

export const AlignButtonClose = styled.div`
  position: relative;
  left: 120px;
  
`
