import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./statusSlice";
import themeReducer from "./themeSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
    theme: themeReducer,
  },
});
