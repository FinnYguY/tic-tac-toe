import "./App.scss";
import Board from "./components/Board";
import StatusField from "./components/StatusField";

export default function App() {
  return (
    <div className="wrapper">
      <StatusField />
      <Board />
    </div>
  );
}
