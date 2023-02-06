import { createSlice, configureStore } from "@reduxjs/toolkit";

let busketSlice = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state?.basket, action.payload];
    },
    removeFromBasket: (state, action) => {
      let index = state?.basket.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        state?.basket.splice(index, 1);
      }
      state.basket = [...state?.basket];
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
        user: action.payload,
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

export const store = configureStore({
  reducer: {
    basket: busketSlice.reducer,
  },
});
