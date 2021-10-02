import styled from "styled-components";

import Theme from "../../design/theme"

import { IoMdStar } from "react-icons/io";



export const Image = styled.img` ///Enquanto src não estava vindo do component
  width: 160px;
  height: 230px;
  
  padding-bottom:  ${Theme.spacing.n2};
`

export const Star = styled(IoMdStar)`
    color: ${Theme.colors.primary};
    font-size: 18px;
`;