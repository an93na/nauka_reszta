import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (user, action) => {},
    removeUser: (user, action) => {},
    setFilter: (user, action) => {},
  },
});

export const { addUser, removeUser, setFilter } = userSlice.actions;
export default userSlice.reducer;
