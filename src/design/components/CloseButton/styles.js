import styled from "styled-components";

import { CgClose } from "react-icons/cg";

import Theme from '../../theme'

export const ButtonClose = styled.button`
  border: none;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
`

export const IconClose = styled(CgClose)`
  color: ${Theme.colors.textSecondary};
  height: 18px;
  width: 20px;
  justify-content: center;
  align-items: center;
`