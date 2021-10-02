import styled from "styled-components";

import Theme from "../../design/theme"

import { IoMdStar } from "react-icons/io";

export const Container = styled.section`
  background-color: ${Theme.colors.background};
    display: flex;
	flex-wrap: wrap;
	align-items: space-between;
	justify-content: center;
	margin: 0 auto;
	width: 100%;
 

    padding-left: ${Theme.spacing.n3};
    padding-right: ${Theme.spacing.n3};
    padding-top: ${Theme.spacing.n3};
`

export const Image = styled.img` ///Enquanto src não estava vindo do component
  width: 160px;
  height: 230px;
  
  padding-bottom:  ${Theme.spacing.n2};
`

export const Star = styled(IoMdStar)`
    color: ${Theme.colors.primary};
    font-size: 18px;
`;