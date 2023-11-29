import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { selectCurrentTheme } from "../../store/themeSlice";
import { useSelector } from "react-redux";

export default function LoadingScreen({ isVisible }) {
  let loadingScreenClassNames = classNames({
    "loading-screen": true,
    "hide-slowly": !isVisible,
  });

  const currentTheme = useSelector(selectCurrentTheme);
  const [loadingScreenImg, setLoadingScreenImg] = useState();

  useEffect(() => {
    let preloadImg = document.createElement("img");
    let imgUrl = `${process.env.PUBLIC_URL}/backgrounds/bg-${currentTheme}-small.jpg`;
    preloadImg.src = imgUrl;
    preloadImg.onload = () => {
      setLoadingScreenImg(imgUrl);
    };
  }, [currentTheme]);

  return (
    <div
      className={loadingScreenClassNames}
      style={
        loadingScreenImg
          ? {
              background: `center / cover no-repeat url(${loadingScreenImg})`,
            }
          : { "background-color": "$white" }
      }
    >
      <div className="loading-screen__blur-panel"></div>
      <div className="loading-screen__spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
