import { configureStore } from "@reduxjs/toolkit";
// import { configure } from "@testing-library/react";
import useReducer from "./userSlices";

export const store = configureStore({
  reducer: {
    user: useReducer,
  },
});
