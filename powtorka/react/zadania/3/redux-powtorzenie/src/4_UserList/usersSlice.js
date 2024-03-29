import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [{ name: "Jole", lastName: "Foo", age: 20, id: Math.random() }],
  searchPhrase: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      const idToDelete = action.payload;
      state.users = state.users.filter((user) => user.id !== idToDelete);
    },
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
      return true;
    }
    if (state.userState.searchPhrase === "adults" && usr.age > 18) {
      return true;
    }
    return false;
  });
export const selectSearchPhrase = (state) => state.userState.searchPhrase;
export const amountOfFilteredUsers = (state) => {
  const total = state.userState.users.filter((usr) => {
    if (state.userState.searchPhrase === "") {
      return true;
    }
    if (state.userState.searchPhrase === "underage" && usr.age < 18) {
      return true;
    }
    if (state.userState.searchPhrase === "adults" && usr.age > 18) {
      return true;
    }
    return false;
  });
  return total.length;
};
export const totalNumberUser = (state) => state.userState.users.length;

export const { addUser, removeUser, setSearchPhrase, resetState } =
  userSlice.actions;
export default userSlice.reducer;
