import { createSlice } from "@reduxjs/toolkit";

const conterSliceEx2 = createSlice({
  name: "counter5",
  initialState: {
    value: 50,
  },
  reducers: {
    increment: (state) => {state.value = state.value+1},
    decrement: (state) => {state.value = state.value-1},
  },
});

export const selectorCounter5 = (state) => state.counter5.value
export const {decrement, increment} = conterSliceEx2.actions
export default conterSliceEx2.reducer;
