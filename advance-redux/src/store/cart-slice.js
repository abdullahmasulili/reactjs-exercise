import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += newItem.price;
      } else {
        const product = {
          ...newItem,
          quantity: 1,
          total: newItem.price,
        };

        state.items.unshift(product);
      }

      state.totalQuantity = state.items.reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
      );
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }

      state.totalQuantity = state.items.reduce(
        (totalQuantity, item) => totalQuantity + item.quantity,
        0
      );
    },
  },
  setCartData(state, action) {
    state.items = action.payload.items;
    state.totalQuantity = action.payload.totalQuantity;
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
