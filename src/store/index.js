import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "../store/statusSlice";

export default configureStore({
  reducer: {
    status: statusReducer,
  },
});
