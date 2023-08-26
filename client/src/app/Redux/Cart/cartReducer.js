import { createSlice } from "@reduxjs/toolkit";
import localStorageService from "../../Services/localStorage.service";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productInCart: localStorageService.getProductsInCart() || [],
    selectedSize: localStorageService.getSizesInCart() || [],
  },
  reducers: {
    // ДОБАВИТЬ В КОРЗИНУ ТОВАР
    setProductInCart: (state, action) => {
      state.productInCart.push(action.payload);
      localStorageService.addProductsInCart(action.payload);
    },
    // ДОБАВИТЬ В КОРЗИНУ РАЗМЕР
    selectSizeInCart: (state, action) => {
      state.selectedSize.push(action.payload);
      localStorageService.addSizeInCart(action.payload);
    },
    // УДАЛИТЬ ИЗ КОРЗИНЫ ТОВАР
    removeProductFromCart: (state, action) => {
      state.productInCart = state.productInCart.filter(
        (product) => product._id !== action.payload
      );
      localStorageService.removeProductsFromCart(action.payload);
    },
    // УДАЛИТЬ ИЗ КОРЗИНЫ РАЗМЕР
    removeSizeFromCart: (state, action) => {
      console.log(action.payload);
      state.selectedSize = state.selectedSize.filter(
        (size) => size._id !== action.payload
      );
      localStorageService.removeSizesFromCart(action.payload);
    },
    //УДАЛИТЬ ВСЕ ИЗ КОРЗИНЫ
    deleteAllFromCart: (state) => {
      state.productInCart = [];
      state.selectedSize = []; // Удаляем все выбранные размеры
      localStorageService.clearAllCart();
      localStorageService.clearAllCartWithSizes(); // Очищаем размеры из local storage
    },
    incrementCount: (state, action) => {
      const updateProduct = state.productInCart.find(
        (product) => product._id === action.payload
      );
      if (updateProduct) {
        updateProduct.count += 1;
      }
      localStorageService.updateProductInCart(updateProduct);
    },
    decrementCount: (state, action) => {
      const updateProduct = state.productInCart.find(
        (product) => product._id === action.payload
      );
      if (updateProduct) {
        updateProduct.count -= 1;
        if (updateProduct.count === 0) {
          updateProduct.count = 1;
        }
        localStorageService.updateProductInCart(updateProduct);
      }
    },
  },
});

export const {
  setProductInCart,
  selectSizeInCart,
  removeProductFromCart,
  removeSizeFromCart,
  deleteAllFromCart,
  incrementCount,
  decrementCount,
} = cartSlice.actions;
export const { reducer: cartReducer } = cartSlice;

//проверка есть ли что-то в корзине
export const isCartEmptySelector = (state) => {
  const { productInCart, selectedSize } = state.cart;
  console.log(productInCart.length === 0 && selectedSize.length === 0);
  return productInCart.length === 0 && selectedSize.length === 0;
};

export default cartSlice;
