import { createSlice } from "@reduxjs/toolkit";

const counterSliceEx = createSlice({
  name: "counter4",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 5;
    },
    decrement: (state) => {
      state.value = state.value - 5;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSliceEx.actions;
export default counterSliceEx.reducer;
