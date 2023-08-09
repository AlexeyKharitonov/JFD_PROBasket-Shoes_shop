import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productInCart: [],
  },
  reducers: {
    // ДОБАВИТЬ В КОРЗИНУ
    setProductInCart: (state, action) => {
      state.productInCart.push(action.payload);
    },
    // УДАЛИТЬ ИЗ КОРЗИНЫ
    removeProductInCart: (state, action) => {
      state.productInCart = state.productInCart.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { setProductInCart, removeProductInCart } = cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;
