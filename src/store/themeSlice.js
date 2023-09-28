import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "neon",
  },
  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
  },
});

export const { setCurrentTheme } = themeSlice.actions;

export const selectCurrentTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
