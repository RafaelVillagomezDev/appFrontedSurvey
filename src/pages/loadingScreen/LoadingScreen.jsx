import React, { lazy } from "react";
import animationData from "../../../public/assets/lottie/lazyLoadLottie.json";

import Lottie from "react-lottie-player";

function LoadingScreen() {
  return (
    <>
      <div id="container_lottie">
        <Lottie
          loop
          animationData={animationData}
          play
          rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
        />
      </div>
    </>
  );
}

export default LoadingScreen;
