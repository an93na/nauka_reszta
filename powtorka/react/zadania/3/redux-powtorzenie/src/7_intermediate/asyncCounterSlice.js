import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCounter = createAsyncThunk(
  "counter/getCounter",
  async (params, thunkAPI) => {
    const response = await fetch("http://localhost:3010/counter");
    const data = await response.json();
    thunkAPI.fulfillWithValue(data);
  }
);

const asyncCounterSlice = createSlice({
  name: "asyncSlice",
  initialState: {
    value: 0,
    errorState: "",
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCounter.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export default asyncCounterSlice.reducer;
