import { createSlice } from "@reduxjs/toolkit";
let reviewSlice = createSlice({
  name: "review",
  initialState: {
    show: false,
    leaveReview: [],
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = action.payload;
    },
    allReviews: (state, action) => {
      state.leaveReview = [...state.leaveReview, action.payload];
      fetch("https://fir-214b5-default-rtdb.firebaseio.com/reviews.json", {
        method: "POST",
        body: JSON.stringify(action.payload),
      });
    },
  },
});

export let reviewActions = reviewSlice.actions;
export let reviewReducer = reviewSlice.reducer;
