import { createSlice } from "@reduxjs/toolkit";

const selectedProductSlice = createSlice({
  name: "selectedProduct",
  initialState: {
    selectedProduct: [],
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setSelectedProduct } = selectedProductSlice.actions;
export const { reducer: selectedProductReducer } = selectedProductSlice;
