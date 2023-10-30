import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos3: [],
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
  },
});
// selektory
export const stateTodo3 = (state) => state.todo3.todos3;
export const selectTotalNumberOfTodos = (state) => state.todo3.todos3.length;
export const selectTotalMarkofTodos = (state) =>
  state.todo3.todos3.join("").length;
// akcje
export const { addTodo, resetState } = Todo3Slice.actions;
// kawałek stanu
export default Todo3Slice.reducer;
