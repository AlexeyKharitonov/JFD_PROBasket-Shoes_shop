import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
  },
  reducers: {
    //ПОЛУЧИМ ВСЕ ПРОДУКТЫ
    loadAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { loadAllProducts } = productsSlice.actions;
export const { reducer: productsReducer } = productsSlice;

// ТЕКУЩИЙ ПРОДУКТ ПО id
export const currentProductById = (productId) => (state) => {
  return state.products.allProducts.find(
    (item) => item.id === Number(productId)
  );
};
