import { createSlice } from "@reduxjs/toolkit";
let reviewSlice = createSlice({
  name: "review",
  initialState: {
    show: false,
    leaveReview: [],
    submit: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = action.payload;
    },
    allReviews: (state, action) => {
      if (action.payload) state.leaveReview = action.payload;
    },
    submitForm: (state) => {
      state.submit = !state.submit;
    },
  },
});

export let reviewActions = reviewSlice.actions;
export let reviewReducer = reviewSlice.reducer;
