import "./App.scss";
import Board from "./components/Board";
import StatusField from "./components/StatusField";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="wrapper">
      <Background />
      <StatusField />
      <Board />
    </div>
  );
}
