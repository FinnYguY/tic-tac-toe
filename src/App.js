import { useSelector } from "react-redux";
import "./App.scss";
import Board from "./components/Board";
import StatusField from "./components/StatusField";
import { selectCurrentTheme } from "./store/themeSlice";
import classNames from "classnames";

export default function App() {
  const currentTheme = useSelector(selectCurrentTheme);
  let wrapperClassname = classNames(["wrapper", `wrapper--${currentTheme}`]);

  return (
    <div className={wrapperClassname}>
      <StatusField />
      <Board />
    </div>
  );
}
