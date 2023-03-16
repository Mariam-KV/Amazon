import { createSlice } from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FireBaseApp";
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
      setDoc(doc(db, "reviews", "review"), {
        ...state.leaveReviews,
      });
      db.collection("reviews")
        .doc("review")
        .get()
        .then((doc) => {
          state.leaveReviews = Object.values(doc.data());
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    },
  },
});

export let reviewActions = reviewSlice.actions;
export let reviewReducer = reviewSlice.reducer;
