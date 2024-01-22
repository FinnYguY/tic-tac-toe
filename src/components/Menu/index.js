import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentTheme,
  setCurrentTheme,
  setIsBgLoaded,
} from "../../store/themeSlice";

export default function Menu({ items, position, details = "all" }) {
  let menuClassNames = classNames({
    menu: true,
    [`menu-${position}`]: true,
  });

  const dispatch = useDispatch();
  const currentTheme = useSelector(selectCurrentTheme);

  function setTheme(themeName) {
    if (currentTheme !== themeName) {
      dispatch(setIsBgLoaded(false));
      dispatch(setCurrentTheme(themeName));
    }
  }

  return (
    <div className={menuClassNames}>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            className="menu__item"
            onClick={() => setTheme(item.themeName)}
          >
            {details === "icon-only" && item.icon}
            {details === "text-only" && item.title}
            {item.icon} - {item.title}
          </div>
        );
      })}
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      title: PropTypes.string,
      themeName: PropTypes.string,
      icon: PropTypes.node,
    }).isRequired
  ),
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  details: PropTypes.oneOf(["all", "text-only", "icon-only"]),
};
