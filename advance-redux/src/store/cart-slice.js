import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        const quantity = state.items[itemIndex].quantity + 1;
        const total = quantity * state.items[itemIndex].price;

        state.items[itemIndex].quantity = quantity;
        state.items[itemIndex].total = total;
      } else {
        const product = {
          ...action.payload,
          quantity: 1,
          total: 1 * action.payload.price,
        };

        state.items.unshift(product);
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          const quantity = state.items[itemIndex].quantity - 1;
          const total = quantity * state.items[itemIndex].price;

          state.items[itemIndex].quantity = quantity;
          state.items[itemIndex].total = total;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
