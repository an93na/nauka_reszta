import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos3: [],
  searchPhrase: "",
};

const Todo3Slice = createSlice({
  name: "todos3",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos3.push(action.payload);
    },
    resetState: (state) => {
      //reset całego stanu
      state = initialState;
    },
    setSearchPhrase: (state, action) => {
      state.searchPhrase = action.payload;
    },
  },
});
// selektory
export const stateTodo3 = (state) => state.todo3.todos3;
export const selectTotalNumberOfTodos = (state) => state.todo3.todos3.length;
export const selectTotalMarkofTodos = (state) =>
  state.todo3.todos3.join("").length;
export const selectTotalNumberOfTodosLess5Mark = (state) => {
  const newTodos = state.todo3.todos3.filter((todo) => todo.length < 5);
  return newTodos.length;
};
export const selectTotalNumberOfTodosMore5Mark = (state) => {
  const newTodos = state.todo3.todos3.filter((todo) => todo.length >= 5);
  return newTodos.length;
};
export const selectSearchPhrase = (state) => state.todo3.searchPhrase;

// akcje
export const { addTodo, resetState, setSearchPhrase } = Todo3Slice.actions;
// kawałek stanu
export default Todo3Slice.reducer;
