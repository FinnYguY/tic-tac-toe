import classNames from "classnames";
import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Loader({ isVisible }) {
  let loaderClassNames = classNames({
    loader: true,
    "hide-slowly": !isVisible,
  });

  return (
    <div className={loaderClassNames}>
      <ThreeCircles
        height="120"
        width="120"
        color="#000000"
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </div>
  );
}
