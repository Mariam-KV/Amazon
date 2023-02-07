import { createSlice, configureStore } from "@reduxjs/toolkit";

let busketSlice = createSlice({
  name: "basket",
  initialState: { basket: [], user: [] },
  reducers: {
    addToBasket: (state, action) => {
      let newItem = state.basket.filter((item) => item.id == action.payload.id);

      if (newItem[0]?.id) {
        console.log(newItem[0].amount);
        newItem[0].amount = +newItem[0].amount + 1;

        state.basket = [...state.basket];
      } else {
        state.basket = [...state.basket, action.payload];
      }
    },
    removeFromBasket: (state, action) => {
      let index = state.basket.findIndex((item) => item.id === action.payload);

      let oldItem = state.basket[index];
      if (oldItem && oldItem.amount > 1) {
        state.basket[index].amount--;
      } else {
        state?.basket.splice(index, 1);
      }
      //state.basket = [...state?.basket];
    },
    emptyBasket: (state) => {
      state.basket = [];
    },
    setUser: (state, action) => {
      state.user = { email: action.payload?.email, uid: action.payload?.uid };
      state.basket = [...state.basket];
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
