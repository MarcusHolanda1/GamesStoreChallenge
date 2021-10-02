import styled from "styled-components";

import SvgCart from "../../../assets/icons/cart.svg";

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

  span{
    position: relative;
    top: -17px;
    left: 2px;
    color: white;
  }
`;