import { createSlice } from "@reduxjs/toolkit";

const counterSliceEx = createSlice({
  name: "counter4",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => state.value + 1,
    decrement: (state) => state.value - 1,
  },
});

export default counterSliceEx.reducer