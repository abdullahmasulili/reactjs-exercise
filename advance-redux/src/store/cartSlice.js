import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isShowCart: false,
  items: [{ title: "Test Item", quantity: 3, total: 18, price: 6 }],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    addItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.product.id
      );

      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      } else {
        state.items.unshift(action.payload.product);
      }
    },
    removeItem(state, action) {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex !== -1) {
        if (state.items[itemIndex].quantity === 1) {
          state.items.splice(itemIndex, 1);
        } else {
          state.item[itemIndex].quantity -= 1;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
