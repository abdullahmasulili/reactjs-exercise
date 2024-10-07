import { createStore } from "redux";

const initialState = {
  counter: 0,
  isShowCounter: true,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        counter: (state.counter += action.payload.amount),
        ...state,
      };
    case "DECREMENT":
      return {
        counter: (state.counter -= 1),
        ...state,
      };
    case "TOGGLE_COUNTER":
      return {
        ...state,
        isShowCounter: !state.isShowCounter,
      };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
