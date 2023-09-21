import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectWinnerName, selectXIsNext } from "../../store/statusSlice";
import { xmark, checkmark } from "../../constants/constants";

export default function StatusField() {
  const winnerName = useSelector(selectWinnerName);
  const xIsNext = useSelector(selectXIsNext);
  const [status, setStatus] = useState("");
  const [statusIcon, setStatusIcon] = useState();

  useEffect(() => {
    if (winnerName) {
      setStatus("Winner: ");
      winnerName === "xmark"
        ? setStatusIcon(xmark.icon)
        : setStatusIcon(checkmark.icon);
    } else {
      setStatus("Current move: ");
      setStatusIcon(xIsNext ? xmark.icon : checkmark.icon);
    }
  }, [winnerName, xIsNext]);

  return (
    <div className="status">
      <div className="status__text">{status}</div>{" "}
      <div className="status__icon">{statusIcon}</div>
    </div>
  );
}
