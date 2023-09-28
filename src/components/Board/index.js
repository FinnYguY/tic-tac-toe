import React, { useState } from "react";

import Cell from "../Cell";
import { calculateWinner } from "../../constants/functions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWinnerName,
  selectXIsNext,
  setWinnerName,
  setXIsNext,
} from "../../store/statusSlice";
import { xmark, checkmark } from "../../constants/constants";
import { setCurrentTheme } from "../../store/themeSlice";

export default function Board() {
  const [cells, setCells] = useState(Array(9).fill({ name: "", icon: "" }));
  const winnerName = useSelector(selectWinnerName);
  const xIsNext = useSelector(selectXIsNext);
  const dispatch = useDispatch();

  function handleClick(i) {
    if (cells[i].name || winnerName) {
      return;
    }
    const nextCells = cells.slice();
    xIsNext ? (nextCells[i] = xmark) : (nextCells[i] = checkmark);
    setCells(nextCells);
    dispatch(setXIsNext(!xIsNext));
    if (calculateWinner(nextCells)) {
      dispatch(setWinnerName(calculateWinner(nextCells).name));
    }
  }

  return (
    <>
      <div className="board display-slowly">
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
