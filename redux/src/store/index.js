import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  isShowCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.isShowCounter = !state.isShowCounter;
    },
  },
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default store;
