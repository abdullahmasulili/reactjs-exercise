import { configureStore } from "@reduxjs/toolkit";
import counter from "./slices/counter";
import auth from "./slices/auth";

const store = configureStore({
  reducer: {
    counter,
    auth,
  },
});

export default store;
