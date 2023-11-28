import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    currentTheme: "neon",
    isBgLoaded: false,
  },
  reducers: {
    setCurrentTheme: (state, action) => {
      state.currentTheme = action.payload;
    },
    setIsBgLoaded: (state, action) => {
      state.isBgLoaded = action.payload;
    },
  },
});

export const { setCurrentTheme, setIsBgLoaded } = themeSlice.actions;

export const selectCurrentTheme = (state) => state.theme.currentTheme;
export const selectIsBgLoaded = (state) => state.theme.isBgLoaded;

export default themeSlice.reducer;
