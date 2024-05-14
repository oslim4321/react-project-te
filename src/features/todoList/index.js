import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    handleCreateTodo: (state, actions) => {
      console.log(actions.payload);
      state.todos.push(actions.payload);
    },

    handleDeleteTodo: (state) => {
      state.todos.splice(0, 1);
    },
  },
});

export const { handleCreateTodo, handleDeleteTodo } = TodoSlice.actions;
export default TodoSlice.reducer;
