import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter3",
  initialState: {
    value: 0,
    poweredValue: 0,
    showPoweredValue: false,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
      state.poweredValue = state.value * state.value;
    },
    decrement: (state) => {
      state.value = state.value - 1;
      state.poweredValue = state.value * state.value;
    },
    resetCounter: (state) => {
      state.value = 0;
      state.poweredValue = 0;
    },
    toggleShowPoweredValue: (state) => {
      state.showPoweredValue = !state.showPoweredValue;
    },
  },
});

export const { decrement, increment, resetCounter, toggleShowPoweredValue } =
  counterSlice.actions;

export default counterSlice.reducer;
