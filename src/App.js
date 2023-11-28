import "./App.scss";
import Board from "./components/Board";
import StatusField from "./components/StatusField";
import Background from "./components/Background";
import Menu from "./components/Menu";
import Loader from "./components/Loader";

import { useSelector } from "react-redux";
import { selectIsBgLoaded } from "./store/themeSlice";
import { menuItems } from "./constants/constants";

export default function App() {
  const isBgLoaded = useSelector(selectIsBgLoaded);

  return (
    <div className="wrapper">
      <Loader isVisible={!isBgLoaded} />
      <Background />
      <StatusField />
      <Board />
      <Menu items={menuItems} position='bottom' />
    </div>
  );
}
