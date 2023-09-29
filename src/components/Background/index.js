import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { selectCurrentTheme } from "../../store/themeSlice";

export default function Background() {
  const currentTheme = useSelector(selectCurrentTheme);

  let backgroundClassName = classNames([
    "background",
    `background--${currentTheme}`,
  ]);

  return <div className={backgroundClassName}></div>;
}
