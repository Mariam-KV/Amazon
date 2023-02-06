import { createSlice } from "@reduxjs/toolkit";

let busketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      return {
        ...state,
        basket: [...state?.basket, action.item],
      };
    },
    removeFromBasket: (state, action) => {
      let index = state?.basket.findIndex(
        (item) => item.id === action.passedId
      );
      if (index >= 0) {
        state?.basket.splice(index, 1);
      }
      return {
        ...state,
        basket: [...state?.basket],
      };
    },
    emptyBasket: (state) => {
      return {
        ...state,
        basket: [],
      };
    },
    setUser: (state, action) => {
      return {
        ...state,
        user: action.user,
        basket: [...state.basket],
      };
    },
  },
});
export let basketActions = busketSlice.actions;
// export let store = configureStore({
//   reducer: {
//     basket: busketSlice.reducer,
//   },
// });
export let store = busketSlice.reducer;
