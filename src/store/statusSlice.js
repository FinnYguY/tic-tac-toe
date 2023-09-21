import { createSlice } from "@reduxjs/toolkit";
// import { statusActionTypes } from "../constants/statusActionTypes";

export const statusSlice = createSlice({
  name: "status",
  initialState: {
    winnerName: "",
    winCells: [],
    xIsNext: true,
  },
  reducers: {
    setWinnerName: (state, action) => {
      state.winnerName = action.payload;
    },
    deleteWinnerName: (state) => {
      state.winnerName = "";
    },
    setWinCells: (state, action) => {
      state.winCells = action.payload;
    },
    deleteWinCells: (state) => {
      state.winCells = [];
    },
    setXIsNext: (state) => {
      state.xIsNext = !state.xIsNext;
    },
  },
});

export const {
  setWinnerName,
  deleteWinner,
  setWinCells,
  deleteWinCells,
  setXIsNext,
} = statusSlice.actions;

export const selectWinnerName = (state) => state.status.winnerName;
export const selectWinCells = (state) => state.status.winCells;
export const selectXIsNext = (state) => state.status.xIsNext;

export default statusSlice.reducer;
