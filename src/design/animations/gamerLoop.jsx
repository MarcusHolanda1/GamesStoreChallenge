import React from "react";
import animationData from "./json/gamer.json";

import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
};

function GamerLoad() {
  return (
      <Lottie options={defaultOptions} height={500} width={500} />
  );
}
export default GamerLoad;
