import { createSlice } from "@reduxjs/toolkit";

const conterSliceEx2 = createSlice({
  name: "counter5",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
    resetCounter: (state) => {
      state.value = 0;
    },
  },
});

export const selectorCounter5 = (state) => state.counter5.value;
export const { decrement, increment, resetCounter } = conterSliceEx2.actions;
export default conterSliceEx2.reducer;
