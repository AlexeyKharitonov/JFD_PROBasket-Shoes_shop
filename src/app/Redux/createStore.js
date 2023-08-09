import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/cartReducer";
import { productsReducer } from "./Products/productsReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});
