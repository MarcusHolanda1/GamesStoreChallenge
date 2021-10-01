import styled from "styled-components";
import Theme from "../../theme";

import SvgCart from "../../../assets/icons/cart.svg";

export const Nav = styled.header`
  position: relative;
  width: 100%;
  height: 60px;

  background-color: ${Theme.colors.white};
  border-bottom: 2px solid ${Theme.colors.border};

  margin-bottom: 40px;
  padding: 0px 68px 0px 50px;
`;

export const Cart = styled.button`
  float: right;

  width: 50px;
  height: 50px;
  margin-top: 15px;
  background-image: url(${SvgCart});
  background-repeat: no-repeat;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const TitleHeader = styled.img`
  padding: 20px 0 0 30px;
`;
