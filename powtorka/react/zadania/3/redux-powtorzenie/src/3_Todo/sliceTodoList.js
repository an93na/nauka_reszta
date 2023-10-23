import { createSlice } from "@reduxjs/toolkit";

const sliceTodoList = createSlice({
  name: "todoList",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const selectTodo = (state) => state.todo.todos
export const { addTodo } = sliceTodoList.actions;
export default sliceTodoList.reducer;
