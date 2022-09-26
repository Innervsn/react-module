import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import dishesReducer from "./dishes/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    dish: dishesReducer,
  },
});
