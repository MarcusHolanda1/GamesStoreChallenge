import React from "react";

import { Nav, TitleHeader } from "./styles";

import SvgTitleHeader from "../../../assets/icons/PSSTOR4.svg";

const Header = (props) => {
  return (
    <Nav>{props.children}
      <TitleHeader src={SvgTitleHeader}></TitleHeader>
    </Nav>
  );
};
export default Header;
