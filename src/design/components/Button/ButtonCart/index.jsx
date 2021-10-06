import React from "react";
import { useHistory } from "react-router-dom";

import { Cart } from "./styles";

const ButtonCart = (props) => {
  const history = useHistory();
  const handleOnClickCart = (route) => history.push(route);

  return (
    <Cart onClick={() => handleOnClickCart("/cart")}>{props.children}</Cart>
  );
};
export default ButtonCart;
