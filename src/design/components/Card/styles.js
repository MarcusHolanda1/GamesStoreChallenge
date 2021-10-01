import styled from "styled-components";

import Theme from "../../theme";

export const DivCard = styled.div`

  padding: 14px 14px 10px 14px;
  margin: 0px 11px 30px 11px;

  background: ${Theme.colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
`;

export const ImageCard = styled.img`
  width: 160px;
  height: 230px;
  
  padding-bottom:  ${Theme.spacing.n2};
`

export const H5 = styled.h5`
  color: ${Theme.colors.textSecondary};
  font-family: ${Theme.font.h5Transparent.fontFamily};
  font-style: ${Theme.font.h5Transparent.fontStyle};
  font-weight: ${Theme.font.h5Transparent.fontWeight};
  font-size: ${Theme.font.h5Transparent.fontSize};
  line-height: ${Theme.font.h5Transparent.lineHeight};

  padding-top: ${Theme.spacing.n1};
  padding-bottom: 8px;
`

export const P = styled.p`
  font-family: ${Theme.font.p.fontFamily};
  font-style: ${Theme.font.p.fontStyle};
  font-weight: ${Theme.font.p.fontWeight};
  font-size: ${Theme.font.p.fontSize};
  line-height: ${Theme.font.p.lineHeight};
`