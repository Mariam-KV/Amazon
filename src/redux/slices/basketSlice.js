import { createSlice } from "@reduxjs/toolkit";
function countTotal(arr, type) {
  if (type === "price") {
    return arr?.reduce((acc, item) => +item.price * item.amount + acc, 0);
  }
  if (type === "amount") {
    return arr?.reduce((acc, item) => +item.amount + acc, 0);
  }
}

let basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    user: [],
    totalAmount: 0,
    totalPrice: 0,
    changeBasket: false,
  },
  reducers: {
    changeColor: (state, action) => {
      state.changeBasket = action.payload;
    },
    addToBasket: (state, action) => {
      //an item that was added
      let newItem = state.basket.filter(
        (item) => item.id === action.payload.id
      );

      // checking if we have this itema already in basket
      if (newItem[0]?.id) {
        newItem[0].amount += action.payload.amount;
      } else {
        state.basket = [...state.basket, action.payload];
      }
      state.totalAmount = countTotal(state.basket, "amount");
      state.totalPrice = countTotal(state.basket, "price");
    },
    removeFromBasket: (state, action) => {
      let index = state.basket.findIndex(
        (item) => item.id === action.payload.id
      );
      let oldItem = state.basket[index];
      if (action.payload.all) {
        state?.basket.splice(index, 1);
        state.totalPrice -= oldItem.amount * oldItem.price;
        state.totalAmount -= oldItem.amount;
      } else {
        if (oldItem && oldItem.amount > 1) {
          state.basket[index].amount--;
        } else {
          state?.basket.splice(index, 1);
        }
        state.totalAmount = countTotal(state.basket, "amount");
        state.totalPrice = countTotal(state.basket, "price");
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
