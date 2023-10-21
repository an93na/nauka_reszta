import { createSlice } from "@reduxjs/toolkit";

const counterSliceEx3 = createSlice({
  name: "counter6",
  initialState: {
    value: 30,
  },
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
  },
});

export const selectCounter6 = (state) => state.counter6.value;

export const { decrement, increment } = counterSliceEx3.actions;

export default counterSliceEx3.reducer;
