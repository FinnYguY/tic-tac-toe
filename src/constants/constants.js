import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export const menuItems = [
  {
    id: 1,
    title: "Forest theme",
    icon: <FontAwesomeIcon icon={solid("mountain-sun")} />,
    action: () => console.log("menu action ok"),
  },
];

export const xmark = {
  name: "xmark",
  icon: (
    <FontAwesomeIcon
      className="neon-pink display-slowly"
      icon={icon({ name: "xmark" })}
    />
  ),
};

export const checkmark = {
  name: "checkmark",
  icon: (
    <FontAwesomeIcon
      className="neon-cyan display-slowly"
      icon={icon({ name: "check", style: "solid" })}
    />
  ),
};
