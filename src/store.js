import { createSlice, configureStore } from "@reduxjs/toolkit";

let busketSlice = createSlice({
  name: "basket",
  initialState: { basket: [], user: [] },
  reducers: {
    addToBasket: (state, action) => {
      let newItem = state.basket.filter(
        (item) => item.id === action.payload.id
      );
      console.log("rendered");
      if (newItem[0]?.id) {
        newItem[0].amount = +newItem[0].amount + 1;

        state.basket = [...state.basket];
        // ${
        //     state.user?.email.split(".")[0]
        //   }
        fetch(
          `https://fir-214b5-default-rtdb.firebaseio.com/${
            state.user?.email.split(".")[0]
          }.json`,
          {
            method: "PUT",
            body: JSON.stringify(state.basket),
          }
        )
          .then((r) => {})

          .catch((err) => console.log(err));
      } else {
        action.payload.amount = 1;
        state.basket = [...state.basket, action.payload];
        fetch(
          `https://fir-214b5-default-rtdb.firebaseio.com/${
            state.user?.email.split(".")[0]
          }.json`,
          {
            method: "PUT",
            body: JSON.stringify(state.basket),
          }
        );
      }
    },
    removeFromBasket: (state, action) => {
      console.log("rendered");
      let index = state.basket.findIndex((item) => item.id === action.payload);

      let oldItem = state.basket[index];
      if (oldItem && oldItem.amount > 1) {
        state.basket[index].amount--;
        fetch(
          `https://fir-214b5-default-rtdb.firebaseio.com/${
            state.user?.email.split(".")[0]
          }.json`,
          {
            method: "PUT",
            body: JSON.stringify(state.basket),
          }
        );
      } else {
        state?.basket.splice(index, 1);
        fetch(
          `https://fir-214b5-default-rtdb.firebaseio.com/${
            state.user?.email.split(".")[0]
          }.json`,
          {
            method: "PUT",
            body: JSON.stringify(state.basket),
          }
        );
      }
      state.basket = [...state?.basket];
    },
    emptyBasket: (state) => {
      // console.log("rendered");
      // state.basket = [];
      // fetch(
      //   `https://fir-214b5-default-rtdb.firebaseio.com/${
      //     state.user?.email.split(".")[0]
      //   }.json`,
      //   {
      //     method: "PUT",
      //     body: JSON.stringify(state.basket),
      //   }
      // );
    },
    setUser: (state, action) => {
      console.log("rendered");
      state.user = { email: action.payload?.email, uid: action.payload?.uid };
      state.basket = [...state.basket];
      fetch(
        `https://fir-214b5-default-rtdb.firebaseio.com/${
          state.user?.email.split(".")[0]
        }.json`,
        {
          method: "PUT",
          body: JSON.stringify(state.basket),
        }
      );
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
