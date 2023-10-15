import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../1_pow/counterSlice";
import counterReducer2 from "../1_pow/counterSlice2";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2,
  },
});
