import { createSlice } from "@reduxjs/toolkit";
let productDetailsSlice = createSlice({
  name: "productDetails",
  initialState: {
    allProduct: [],
    related: [],
    oneProduct: [],
    category: [],
    allCategory: [],
    showProducts: [],
  },
  reducers: {
    allProducts: (state, action) => {
      state.allProduct = [...action.payload];
    },
    selectOneProduct: (state, action) => {
      state.oneProduct = state.allProduct.filter(
        (product) => product.id === action.payload
      );
    },
    relatedProducts: (state, action) => {
      state.related = state.allProduct.filter(
        (el) => el.category === action.payload
      );
    },
    filterProducts: (state, action) => {
      state.showProducts = state.allProduct.filter(
        (product) => product.category === action.payload
      );
    },
    showProducts: (state, action) => {
      const page = action.payload;
      const start = (page - 1) * 8;
      state.showProducts = state.allProduct.slice(start, start + 8);
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

      state.allCategory = [...newallCategory];
    },
  },
});
export let productDetailsActions = productDetailsSlice.actions;
export let productDetailsReducer = productDetailsSlice.reducer;
