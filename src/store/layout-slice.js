import { createSlice } from "@reduxjs/toolkit";

const layoutInitialState = { isCartVisible: true, notification: null };

const layoutSlice = createSlice({
  name: "layout",
  initialState: layoutInitialState,
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
        title: action.payload.title,
      };
    },
  },
});

export const layoutActions = layoutSlice.actions;
export default layoutSlice;
