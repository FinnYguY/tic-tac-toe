import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export const xmark = {
  name: "xmark",
  icon: (
    <FontAwesomeIcon className="neon-pink" icon={icon({ name: "xmark" })} />
  ),
};

export const checkmark = {
  name: "checkmark",
  icon: (
    <FontAwesomeIcon
      className="neon-cyan"
      icon={icon({ name: "check", style: "solid" })}
    />
  ),
};
