import { createSlice } from "@reduxjs/toolkit";
let basketSlice = createSlice({
  name: "basket",
  initialState: { basket: [], user: [], totalAmount: 0, totalPrice: 0 },
  reducers: {
    addToBasket: (state, action) => {
      let newItem = state.basket.filter(
        (item) => item.id === action.payload.id
      );

      if (newItem[0]?.id) {
        newItem[0].amount = +newItem[0].amount + 1;

        state.basket = [...state.basket];
      } else {
        action.payload.amount = 1;
        state.basket = [...state.basket, action.payload];
      }
      state.totalAmount = state.basket?.reduce(
        (acc, item) => +item.amount + acc,
        0
      );
      state.totalPrice = state.basket?.reduce(
        (acc, item) => +item.price * item.amount + acc,
        0
      );
    },
    removeFromBasket: (state, action) => {
      let index;

      index = state.basket.findIndex((item) => item.id === action.payload.id);
      if (action.payload.all) {
        let oldItem = state.basket[index];
        state?.basket.splice(index, 1);
        state.totalPrice -= oldItem.amount * oldItem.price;
        state.totalAmount -= oldItem.amount;
      } else {
        let oldItem = state.basket[index];
        if (oldItem && oldItem.amount > 1) {
          state.basket[index].amount--;
        } else {
          state?.basket.splice(index, 1);
        }
        state.totalAmount = state.basket?.reduce(
          (acc, item) => +item.amount + acc,
          0
        );
        state.totalPrice = state.basket?.reduce(
          (acc, item) => +item.price * item.amount + acc,
          0
        );
      }
    },
    emptyBasket: (state) => {
      state.basket = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
    setUser: (state, action) => {
      state.user = { email: action.payload?.email, uid: action.payload?.uid };
      state.basket = [...state.basket];
    },
  },
});
export let basketActions = basketSlice.actions;
export let basketReducer = basketSlice.reducer;
