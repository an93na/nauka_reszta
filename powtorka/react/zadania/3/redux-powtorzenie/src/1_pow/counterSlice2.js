import { createSlice } from "@reduxjs/toolkit";

const counterSlice2 = createSlice({
  name: "counter",
  initialState: {
    value2: "test",
  },
  reducers: {},
});

export default counterSlice2.reducer;
