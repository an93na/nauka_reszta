import { createSlice } from "@reduxjs/toolkit";

const counterSliceEx3 = createSlice({
  name: "counter6",
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
    resetBtn: (state) => {state.value = 0}
  },
});

export const selectCounter6 = (state) => state.counter6.value;

export const { decrement, increment, resetBtn } = counterSliceEx3.actions;

export default counterSliceEx3.reducer;
