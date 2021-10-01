import React from "react";

import { Container } from "./styles";

const ContainerGlobal = (props) => {
  return <Container>{props.children}</Container>;
};
export default ContainerGlobal;
