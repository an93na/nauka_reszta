import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter3",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    resetCounter: (state) => {
        state.value = 0;
    }
  },
});

export const { decrement, increment, resetCounter } = counterSlice.actions;

export default counterSlice.reducer;
