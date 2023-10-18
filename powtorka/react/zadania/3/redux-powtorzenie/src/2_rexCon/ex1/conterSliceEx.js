import { createSlice } from "@reduxjs/toolkit";

const counterSliceEx = createSlice({
  name: "counter4",
  initialState: {
    value: 20,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSliceEx.actions;
export default counterSliceEx.reducer;
