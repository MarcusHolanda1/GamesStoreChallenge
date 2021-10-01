import styled from "styled-components";

import Theme from "../../theme/index";

export const DivTitle = styled.div`
  width: 190px;
  height: 50px;
  
  border-left: 2px solid ${Theme.colors.primary};
  padding-left: 10px;
  margin-left: 78px;
`;

export const H3 = styled.h3`

  color: ${Theme.colors.text};
  font-family: ${Theme.font.h3.fontFamily};
  font-style: ${Theme.font.h3.fontStyle};
  font-weight: ${Theme.font.h3.fontWeight};
  font-size: ${Theme.font.h3.fontSize};
  line-height: ${Theme.font.h3.lineHeight};
`;

export const H5 = styled.h5`
  color: ${Theme.colors.text};
  font-family: ${Theme.font.h5.fontFamily};
  font-style: ${Theme.font.h5.fontStyle};
  font-weight: ${Theme.font.h5.fontWeight};
  font-size: ${Theme.font.h5.fontSize};
  line-height: ${Theme.font.h5.lineHeight};
`
