import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon, solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { useSetTheme } from "./functions";

export const themeMenuItems = [
  {
    id: 1,
    title: "Forest theme",
    themeName: "forest",
    icon: <FontAwesomeIcon icon={solid("mountain-sun")} />,
  },
  {
    id: 2,
    title: "Neon theme",
    themeName: "neon",
    icon: <FontAwesomeIcon icon={solid("n")} />,
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
