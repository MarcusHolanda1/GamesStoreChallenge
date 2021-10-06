import styled from "styled-components";

import Theme from "../../design/theme";

export const Container = styled.section`
  display: inline-block;
  align-items: center;
  text-align: center;

  padding-left: ${Theme.spacing.n3};
  padding-right: ${Theme.spacing.n3};
  padding-top: ${Theme.spacing.n3};
  width: 100%;

  h1 {
    color: ${Theme.colors.primary};
    font-family: ${Theme.font.h1.fontFamily};
    font-style: ${Theme.font.h1.fontStyle};
    font-weight: ${Theme.font.h1.fontWeight};
    font-size: ${Theme.font.h1.fontSize};
    line-height: ${Theme.font.h1.lineHeight};
  }

  h2 {
    color: ${Theme.colors.primary};
    font-family: ${Theme.font.h2.fontFamily};
    font-style: ${Theme.font.h2.fontStyle};
    font-weight: ${Theme.font.h2.fontWeight};
    font-size: ${Theme.font.h2.fontSize};
    line-height: ${Theme.font.h2.lineHeight};
  }
`;
