import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // stan
  name: "counter",
  initialState: {
    value: 200,
  },
  // metody do stanu, jakie funkcje będą mogły 
  // wpływać na stan
  reducers: {},
});

export default counterSlice.reducer;
