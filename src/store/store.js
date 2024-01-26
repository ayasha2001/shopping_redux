import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./layout-slice";

const store = configureStore({
  reducer: { layout: layoutSlice.reducer},
});

export default store;
