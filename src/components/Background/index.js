import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentTheme, setIsBgLoaded } from "../../store/themeSlice";
// import Loader from "../Loader";

export default function Background() {
  const currentTheme = useSelector(selectCurrentTheme);
  const dispatch = useDispatch();
  // const [isLoaded, setIsLoaded] = useState(false);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    let preloadImg = document.createElement("img");
    let imgUrl = `${process.env.PUBLIC_URL}/backgrounds/bg-${currentTheme}.jpg`;
    preloadImg.src = imgUrl;
    preloadImg.onload = () => {
      setBgImage(imgUrl);
      dispatch(setIsBgLoaded(true));
      // setIsLoaded(true);
    };
  }, [currentTheme]);

  return (
    <>
      {/* <Loader isVisible={!isLoaded} /> */}
      <div
        className="background"
        style={{ background: `center / cover no-repeat url(${bgImage})` }}
      ></div>
    </>
  );
}
