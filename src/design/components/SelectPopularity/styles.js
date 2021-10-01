import styled from "styled-components";

import Theme from "../../theme/index";

export const DivSelect = styled.div`
  width: 200px;
  height: 48px;
  float: right;
`;

export const Select = styled.select`
  width: 200px;
  height: 48px;

  background-color: ${Theme.colors.white};
  border-radius: 16px;
  border: none;
  padding-left: ${Theme.spacing.n3};
  cursor: pointer;

  color: ${Theme.colors.textSecondary};
  font-family: ${Theme.font.h5Transparent.fontFamily};
  font-style: ${Theme.font.h5Transparent.fontStyle};
  font-weight: ${Theme.font.h5Transparent.fontWeight};
  font-size: ${Theme.font.h5Transparent.fontSize};
  line-height: ${Theme.font.h5Transparent.lineHeight};

  option {
    color: ${Theme.colors.text};
    background: white;
    min-height: 20px;
  }
`;
