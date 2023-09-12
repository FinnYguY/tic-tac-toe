import React from "react";

export default function Cell({ value, onCellClick }) {
  return (
    <button onClick={onCellClick} className="board__cell">
      {value?.icon}
    </button>
  );
}
