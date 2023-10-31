import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ name: "Jole", lastName: "Foo", age: 20, id: Math.random() }],
  searchPhrase: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (user, action) => {
      user.users.push(action.payload);
    },
    removeUser: (user, action) => {},
    setSearchPhrase: (state, action) => {
      state.searchPhrase = action.payload;
    },
    resetState: () => initialState,
  },
});
export const usersSelector = (state) => state.userState.users;
export const selectSearchPhrase = (state) => state.userState.searchPhrase;
export const { addUser, removeUser, setFilter } = userSlice.actions;
export default userSlice.reducer;
