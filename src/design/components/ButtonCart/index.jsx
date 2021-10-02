import React from "react";

import { Cart } from "./styles";


const ButtonCart = (props) => {
  return (
    <Cart>
      {props.children}
    </Cart>
  );
};
export default ButtonCart;
