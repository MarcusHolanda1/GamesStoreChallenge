import React from "react";

import { ButtonClose, IconClose } from "./styles";

const CloseButton = (props) => {
  return (
    <ButtonClose>
      <IconClose>{props.children}</IconClose>
    </ButtonClose>
  );
};
export default CloseButton;
