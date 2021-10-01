import React from "react";

import { H1, H2, H3, H4, H4Buy, H5, H5Transparent, P, SMALL, ButtonText } from "./styles";


export function Text({type, ...rest}) {
  switch (type) {
    case "h1":
      return <H1>{rest.children}</H1>;
    case "h2":
      return <H2>{rest.children}</H2>;
    case "h3":
      return <H3>{rest.children}</H3>;
    case "h4":
      return <H4>{rest.children}</H4>;
    case "h4buy":
      return <H4Buy>{rest.children}</H4Buy>;
    case "strong":
      return <H5>{rest.children}</H5>;
    case "h5Transparent":
      return <H5Transparent>{rest.children}</H5Transparent>;
    case "small":
      return <SMALL>{rest.children}</SMALL>;
    case "buttonText":
      return <ButtonText>{rest.children}</ButtonText>;
    default:
      return <P>{rest.children}</P>;
  }
}

