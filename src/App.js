import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./App.scss";

function Cell({ value, onCellClick }) {
  return (
    <button onClick={onCellClick} className="board__cell">
      {value}
    </button>
  );
}

function Board() {
  const xmark = (
    <FontAwesomeIcon className="tic-tac-toe" icon={icon({ name: "xmark" })} />
  );
  const checkmark = (
    <FontAwesomeIcon
      className="tic-tac-toe"
      icon={icon({ name: "check", style: "solid" })}
    />
  );

  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (cells[i]) return;
    const nextCells = cells.slice();
    xIsNext ? (nextCells[i] = xmark) : (nextCells[i] = checkmark);
    setCells(nextCells);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="board">
      <div className="board__row">
        <Cell value={cells[0]} onCellClick={() => handleClick(0)} />
        <Cell value={cells[1]} onCellClick={() => handleClick(1)} />
        <Cell value={cells[2]} onCellClick={() => handleClick(2)} />
      </div>
      <div className="board__row">
        <Cell value={cells[3]} onCellClick={() => handleClick(3)} />
        <Cell value={cells[4]} onCellClick={() => handleClick(4)} />
        <Cell value={cells[5]} onCellClick={() => handleClick(5)} />
      </div>
      <div className="board__row">
        <Cell value={cells[6]} onCellClick={() => handleClick(6)} />
        <Cell value={cells[7]} onCellClick={() => handleClick(7)} />
        <Cell value={cells[8]} onCellClick={() => handleClick(8)} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <Board />
      {/* <FontAwesomeIcon className="tic-tac-toe" icon={icon({ name: "xmark" })} />
      <FontAwesomeIcon icon={icon({ name: "check", style: "solid" })} />{" "} */}
    </div>
  );
}
