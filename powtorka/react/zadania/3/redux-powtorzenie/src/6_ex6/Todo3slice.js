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

export const stateTodo3 = (state) => state.todo3.todos3;
export const { addTodo, resetState } = Todo3Slice.actions;
export default Todo3Slice.reducer;
