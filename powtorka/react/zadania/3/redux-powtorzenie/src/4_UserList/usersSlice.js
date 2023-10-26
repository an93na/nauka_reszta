import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (user, action)=>{},
    removeUser: (user, action)=>{},
    setFilter: (user, action)=>{},
  },
});

export default userSlice.reducer