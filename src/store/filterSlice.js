import { createSlice } from "@reduxjs/toolkit";
let filterSlice = createSlice({
  name: "filter",
  initialState: {
    category: null,
    allCategory: [],
  },
  reducers: {
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
export let filterActions = filterSlice.actions;
export let filterReducer = filterSlice.reducer;
