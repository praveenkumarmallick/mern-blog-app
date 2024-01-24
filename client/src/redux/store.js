import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/Slice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
