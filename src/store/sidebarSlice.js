import { createSlice} from "@reduxjs/toolkit";
let sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    show: false,
  },
  reducers: {
    toggleShow: (state, action) => {
      state.show = action.payload;
    },
  },
});
export let sidebarActions = sidebarSlice.actions;
export let sidebarReducer = sidebarSlice.reducer;
