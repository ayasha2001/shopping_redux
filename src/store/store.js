import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layout-slice";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { layout: layoutSlice.reducer,cart:cartSlice.reducer},
});

export default store;
