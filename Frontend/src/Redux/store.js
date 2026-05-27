import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import pinsReducer from "./pinsSlice";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pins: pinsReducer,
    search: searchReducer,
  },
});
