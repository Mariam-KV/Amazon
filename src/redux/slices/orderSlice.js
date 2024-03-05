import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      return action.payload || state;
    },
  },
});

export const { addOrder } = orderSlice.actions;
export const orderReducer = orderSlice.reducer;
