import React from "react";

import { Nav, Cart, TitleHeader } from "./styles";

import SvgTitleHeader from "../../../assets/icons/PSSTOR4.svg";

const Header = (props) => {
  return (
    <Nav>
      <TitleHeader src={SvgTitleHeader}></TitleHeader>
      <Cart></Cart>
    </Nav>
  );
};
export default Header;
