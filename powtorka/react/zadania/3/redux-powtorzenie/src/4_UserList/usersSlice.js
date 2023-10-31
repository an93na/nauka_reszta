import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [{ name: "Jole", lastName: "Foo", age: 20, id: Math.random() }],
  },
  reducers: {
    addUser: (user, action) => {
      user.users.push(action.payload);
    },
    removeUser: (user, action) => {},
    setFilter: (user, action) => {},
  },
});
export const usersSelector = (state) => state.userState.users;
export const { addUser, removeUser, setFilter } = userSlice.actions;
export default userSlice.reducer;
