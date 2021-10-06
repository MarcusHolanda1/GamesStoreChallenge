import styled from "styled-components";

import Theme from "../../design/theme";

import { IoMdStar, IoMdStarHalf } from "react-icons/io";

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 16px;
`;

export const Image = styled.img`
  width: 160px;
  height: 230px;

  margin: auto;
  align-self: center;

  cursor: pointer;
  padding-bottom: ${Theme.spacing.n2};

  &:hover{
    transition: transform .5s ease;
    transform: scale(1.1);
  }
`;

export const ImageModal = styled.img`
  width: 160px;
  height: 230px;

  margin: auto;
  align-self: center;
  padding-bottom: ${Theme.spacing.n2};
`;

export const Star = styled(IoMdStar)`
  color: ${Theme.colors.primary};
  font-size: 16px;
  margin-top: 8px;
`;

export const StarHalf = styled(IoMdStarHalf)`
  color: ${Theme.colors.primary};
  font-size: 16px;
  margin-top: 8px;
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

  color: ${Theme.colors.primary};
  font-size: 24px;

  margin-top: ${Theme.spacing.n1};
  margin-bottom: ${Theme.spacing.n2};
`;

export const StarHalfModal = styled(IoMdStarHalf)`

  color: ${Theme.colors.primary};
  font-size: 24px;

  margin-top: ${Theme.spacing.n1};
  margin-bottom: ${Theme.spacing.n2};
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

export const ContentTextTitle = styled.div`
  padding-left: 30px;
`

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Theme.spacing.n3};
  
  padding-top: 30px;
`

export const AlignTextsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const SmallContainer = styled.div`
  position: relative;
  display: inline;
  top: -3px;
 
`

export const SpaceButtonPrimary = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
 
`