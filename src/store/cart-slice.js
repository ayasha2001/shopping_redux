import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = { cartItems: [], badge: 0 };

const countQuantity = (state) => {
  let totalQuantity = 0;
  state.cartItems.map((item) => {
    totalQuantity += item.quantity;
  });
  state.badge = totalQuantity;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find((item) => {
        return item.id === newItem.id;
      });
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        console.log("if");
      } else {
        console.log("else");
        state.cartItems.push({
          id: newItem.id,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      }
      countQuantity(state);
    },
    removeItem(state, action) {
      const id = action.payload;
      const item = state.cartItems.find((element) => {
        return element.id === id;
      });
      if (item.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => {
          return item.id !== id;
        });
      } else {
        item.quantity--;
        item.totalPrice = item.totalPrice - item.price;
      }
      countQuantity(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
