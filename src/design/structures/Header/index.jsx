import React from "react";

import { Nav, TitleHeader } from "./styles";
import { useHistory } from 'react-router-dom';

import SvgTitleHeader from "../../../assets/icons/PSSTORE.svg";

const Header = (props) => {
  const history = useHistory()
  const handleOnClickCart = route => history.push(route)

  return (
    <Nav>
      {props.children}
      <TitleHeader onClick={() => handleOnClickCart('/')} src={SvgTitleHeader}></TitleHeader>
    </Nav>
  );
};
export default Header;
