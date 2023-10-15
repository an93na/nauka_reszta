import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 200,
    value2: "test",
  },
  reducers: {},
});

export default counterSlice.reducer;
