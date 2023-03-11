import { createSlice } from "@reduxjs/toolkit";
let reviewSlice = createSlice({
  name: "review",
  initialState: {
    show: false,

    leaveReviews: [],
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = action.payload;
    },
    allReviews: (state, action) => {
      state.leaveReviews = [...state.leaveReviews, action.payload];
    },
  },
});

export let reviewActions = reviewSlice.actions;
export let reviewReducer = reviewSlice.reducer;
