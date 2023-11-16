import { createSlice } from "@reduxjs/toolkit";

let orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
});
export let orderActions = orderSlice.actions;
export let orderReducer = orderSlice.reducer;
