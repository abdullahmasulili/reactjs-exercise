import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      title: "Test Product",
      price: 6.0,
      desciption: "This is a first product - amazing!",
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
