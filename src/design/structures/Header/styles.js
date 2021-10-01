import styled from "styled-components";
import Theme from "../../theme";

import SvgCart from "../../../assets/icons/cart.svg";

export const Nav = styled.header`
  position: absolute;
  width: 100%;
  height: 60px;

  border-bottom: 2px solid ${Theme.colors.border};


`;

export const Cart = styled.button`
  float: right;

  width: 50px;
  height: 50px;
  margin-top: 15px;
  margin-right: 30px;
  background-image: url(${SvgCart});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const TitleHeader = styled.img`
  padding: 20px 0 0 30px;
`;
