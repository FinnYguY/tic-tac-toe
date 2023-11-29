import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

export default function Menu({ items, position, details }) {
  let menuClassNames = classNames({
    menu: true,
    [`menu-${position}`]: true,
  });

  return (
    <div className={menuClassNames}>
      {items.map((item) => {
        return (
          <div key={item.id} onClick={item.action}>
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
      icon: PropTypes.node,
      action: PropTypes.func,
    }).isRequired
  ),
  position: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  details: PropTypes.oneOf(["all", "text-only", "icon-only"]),
};
