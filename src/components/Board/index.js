import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import Cell from "../Cell";
import { calculateWinner } from "../../constants/functions";

export default function Board() {
  const xmark = {
    name: "xmark",
    icon: (
      <FontAwesomeIcon
        className="tic-tac-toe xmark"
        icon={icon({ name: "xmark" })}
      />
    ),
  };
  const checkmark = {
    name: "checkmark",
    icon: (
      <FontAwesomeIcon
        className="tic-tac-toe checkmark"
        icon={icon({ name: "check", style: "solid" })}
      />
    ),
  };

  const [cells, setCells] = useState(Array(9).fill({ name: "", icon: "" }));
  const [xIsNext, setXIsNext] = useState(true);
  // const [status, setStatus] = useState("");

  function handleClick(i) {
    if (calculateWinner(cells) || cells[i].icon) {
      return;
    }
    const nextCells = cells.slice();
    xIsNext ? (nextCells[i] = xmark) : (nextCells[i] = checkmark);
    setCells(nextCells);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(cells);
  let status = "";
  winner
    ? (status = `Winner: ${winner}`)
    : (status = `Current move: ${xIsNext ? xmark.name : checkmark.name}`);

  return (
    <>
      <div style={{ color: "white" }}>{status}</div>
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
    </>
  );
}
