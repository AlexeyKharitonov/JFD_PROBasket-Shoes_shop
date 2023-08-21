import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./Cart/cartReducer";
import { productsReducer } from "./Products/productsReducer";
import { categoriesReducer } from "./Categories/categoriesReducer";
import { selectedProductReducer } from "./Selected/selectedProduct";
import usersReducer from "./Users/usersReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer,
    selected: selectedProductReducer,
    users: usersReducer,
  },
});
