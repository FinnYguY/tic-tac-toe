import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

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
