import styled from "styled-components";

import Theme from "../../design/theme";

import { IoMdStar } from "react-icons/io";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`;

export const Image = styled.img`
  ///Enquanto src não estava vindo do component
  width: 160px;
  height: 230px;

  margin: auto;
  align-self: center;

  cursor: pointer;
  padding-bottom: ${Theme.spacing.n2};
`;

export const Star = styled(IoMdStar)`
  color: ${Theme.colors.primary};
  font-size: 20px;
`;

///

export const ContainerModal = styled.section`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  height: max(30vh, 925px);
  background: rgba(0, 0, 0, 0.48); ;
  overflow: hidden;
`;

export const StarModal = styled(IoMdStar)`
  position: absolute;
  color: ${Theme.colors.primary};
  font-size: 26px;

  margin-top: ${Theme.spacing.n1};
`;

export const AlignButtonClose = styled.div`
  position: relative;

  left: 120px;
`;


export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Theme.spacing.n3};
`

export const Content = styled.div`
  padding: ${Theme.spacing.n3};
`