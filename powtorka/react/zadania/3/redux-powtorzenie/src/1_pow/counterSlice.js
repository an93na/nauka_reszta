import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 100,
  },
  reducers: {},
});

export default counterSlice.reducer;
