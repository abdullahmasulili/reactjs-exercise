import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  editItem: {},
  isLoading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEventsData(state, action) {
      state.items = action.payload;
    },
    setEditEvent(state, action) {
      state.editItem = state.items.find((item) => item.id === action.payload);
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    addEvent(state, action) {
      state.items.unshift(action.payload);
    },
    removeEvent(state, action) {
      state.items = state.items.filter((event) => event.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    events: eventsSlice.reducer,
  },
});

export const eventsActions = eventsSlice.actions;

export default store;
