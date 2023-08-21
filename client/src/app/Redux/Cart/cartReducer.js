import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productInCart: [],
    selectedSize: {},
    count: {},
  },
  reducers: {
    // ДОБАВИТЬ В КОРЗИНУ
    setProductInCart: (state, action) => {
      state.productInCart.push(action.payload);
      state.count[action.payload.id] = 1;
    },
    // УВЕЛИЧЕНИЕ/УМЕНЬШЕНИЕ КОЛ-ВА ТОВАРА В КОРЗИНЕ
    // amountOfProducts: (state, action) => {

    // }
    // УДАЛИТЬ ИЗ КОРЗИНЫ
    removeProductFromCart: (state, action) => {
      console.log(action.payload);
      state.productInCart = state.productInCart.filter(
        (product) => product._id !== action.payload
      );
    },
    // УДАЛИТЬ ВСЕ ИЗ КОРЗИНЫ
    deleteAllFromCart: (state, action) => {
      state.productInCart = [];
    },
    // ВЫБОР РАЗМЕРА
    selectSize: (state, action) => {
      const { productId, size } = action.payload;
      state.selectedSize[productId] = size;
    },
    // УДАЛИТЬ ВЫБРАННЫЙ РАЗМЕР
    deleteSelectedSize: (state, action) => {
      const productId = action.payload;
      delete state.selectedSize[productId];
    },
    counter: (state, action) => {
      const { productId, count } = action.payload;
      state.count[productId] = count;
    },
  },
});

export const {
  setProductInCart,
  removeProductFromCart,
  deleteAllFromCart,
  selectSize,
  deleteSelectedSize,
  counter,
} = cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;
