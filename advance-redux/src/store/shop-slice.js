import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Product 1",
      price: 6.0,
      description: "This is a first product - amazing!",
    },
    {
      id: "p2",
      title: "Product 2",
      price: 3.0,
      description: "This is a first second - immaculate!",
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
