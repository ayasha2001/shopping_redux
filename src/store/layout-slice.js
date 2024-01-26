import { createSlice } from "@reduxjs/toolkit";

const layoutInitialState = { isCartVisible: true };

const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutInitialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice;
