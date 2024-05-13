import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    handleCreateTodo: (state) => {
      state.todos.push("hello");
    },

    handleDeleteTodo: (state) => {
      state.todos.splice(0, 1);
    },
  },
});

export const { handleCreateTodo, handleDeleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
