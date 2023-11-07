import { createSlice } from "@reduxjs/toolkit";
let productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    allProduct: [],
    related: [],
    oneProduct: [],
    category: [],
    allCategory: [],
    filterProducts: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.allProduct = [...action.payload];
    },
    selectOneProduct: (state, action) => {
      state.oneProduct = state.allProduct.filter(
        (product) => product.id === action.payload
      );
      console.log(state.oneProduct);
    },
    relatedProducts: (state, action) => {
      state.related = state.allProduct.filter(
        (el) => el.category === action.payload
      );
    },
    filterProducts: (state, action) => {
      state.filterProducts = state.allProduct.filter(
        (product) => product.category === action.payload
      );
    },
    changeCategory: (state, action) => {
      if (action.payload) {
        state.category = { value: action.payload, label: action.payload };
      } else {
        state.category = [];
      }
    },
    allCategory: (state, action) => {
      let newallCategory = [];
      let all = [];
      action.payload.map((element) => {
        if (!all.includes(element.category)) {
          all.push(element.category);
          newallCategory.push({
            value: element.category,
            label: element.category,
          });
        }
        return newallCategory;
      });
      // state.allCategory = [...state.category, ...newallCategory];
      state.allCategory = [...newallCategory];
    },
  },
});
export let productDetailsActions = productDetailsSlice.actions;
export let productDetailsReducer = productDetailsSlice.reducer;
