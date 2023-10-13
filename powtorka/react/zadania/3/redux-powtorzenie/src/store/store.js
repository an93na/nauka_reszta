import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../1_pow/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
