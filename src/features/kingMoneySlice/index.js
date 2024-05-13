import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amount: 0,
};

export const kingMoneySlice = createSlice({
  name: "kingAccount",
  initialState,

  reducers: {
    servantAddMoney: (state) => {
      state.amount += 10;
    },

    servantDebitMoney: (state) => {
      state.amount -= 10;
    },
  },
});

export const { servantAddMoney, servantDebitMoney } = kingMoneySlice.actions;
export default kingMoneySlice.reducer;
