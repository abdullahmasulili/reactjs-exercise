import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: Math.random(),
      title: "Test Product",
      price: 6.0,
      description: "This is a first product - amazing!",
    },
  ],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProductItem(state) {},
  },
});

export const shopActions = shopSlice.actions;

export default shopSlice.reducer;
