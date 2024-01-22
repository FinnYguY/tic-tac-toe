import "./App.scss";
import Board from "./components/Board";
import StatusField from "./components/StatusField";
import Background from "./components/Background";
import Menu from "./components/Menu";
import LoadingScreen from "./components/LoadingScreen";

import { useSelector } from "react-redux";
import { selectIsBgLoaded } from "./store/themeSlice";
import { themeMenuItems } from "./constants/constants";

export default function App() {
  const isBgLoaded = useSelector(selectIsBgLoaded);

  return (
    <div className="wrapper">
      <LoadingScreen isVisible={!isBgLoaded} />
      <Background />
      <StatusField />
      <Board />
      <Menu items={themeMenuItems} position="bottom" />
    </div>
  );
}
