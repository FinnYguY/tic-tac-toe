import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTheme, setIsBgLoaded } from "../../store/themeSlice";

export default function Background() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    let preloadImg = document.createElement("img");
    let imgUrl = `${process.env.PUBLIC_URL}/backgrounds/bg-${currentTheme}.jpg`;
    preloadImg.src = imgUrl;
    preloadImg.onload = () => {
      setBgImage(imgUrl);
      dispatch(setIsBgLoaded(true));
    };
  }, [currentTheme]);

  return (
    <>
      <div
        className="background"
        style={{ background: `center / cover no-repeat url(${bgImage})` }}
      ></div>
    </>
  );
}
