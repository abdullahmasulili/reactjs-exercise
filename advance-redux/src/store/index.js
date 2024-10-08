import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart-slice";
import shopReducer from "./shop-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shop: shopReducer,
    ui: uiReducer,
  },
});

export default store;
