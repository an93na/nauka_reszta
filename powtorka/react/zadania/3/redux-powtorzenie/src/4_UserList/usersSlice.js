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
export const usersSelector = (state) =>
  state.userState.users.filter((usr) => {
    if (state.userState.searchPhrase === "") {
      return true;
    }
    if (state.userState.searchPhrase === "underage" && usr.age < 18) {
      return usr;
    }
    if (state.userState.searchPhrase === "adults" && usr.age > 18) {
      return usr;
    }
  });
export const selectSearchPhrase = (state) => state.userState.searchPhrase;
export const { addUser, removeUser, setSearchPhrase, resetState } =
  userSlice.actions;
export default userSlice.reducer;
