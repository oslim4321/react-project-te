import { configureStore } from "@reduxjs/toolkit";
import kingMoneySlice from "./features/kingMoneySlice";
import todoListSlice from "./features/todoList";
export const store = configureStore({
  reducer: {
    kingMoney: kingMoneySlice,
    todoListSlice,
  },
});
