import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// When we have multiple slices we will run into issues. Since we can only pass single slice to createStore()
// so we instead use configureStore
/*
  configureStore({
    reducer: {
      counter: counterSlice.reducer,
      ...
    }
  })
 */
// creating store
/*const store = configureStore({
  reducer: counterSlice.reducer,
});*/

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// export to allow connecting to it
export default store;
