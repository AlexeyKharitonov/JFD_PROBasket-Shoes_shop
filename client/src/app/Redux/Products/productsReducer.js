import { createAction, createSlice } from "@reduxjs/toolkit";
import productService from "../../Services/products.service";
import { transformPath } from "../../utils/transform";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: null,
    isLoading: false,
    errors: null,
  },
  reducers: {
    //ЗАПРОСИЛИ ВСЕ ПРОДУКТЫ
    productsRequested: (state) => {
      state.isLoading = true;
    },
    //ПРОДУКТЫ ПРИШЛИ
    productsRecived: (state, action) => {
      state.allProducts = action.payload;
      state.isLoading = false;
    },
    //ЗАПРОС НЕ ПРОШЕЛ, ошибка
    productsRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
    //ОБНОВИТЬ ПРОДУКТ
    productUpdated: (state, action) => {
      const productIndex = state.allProducts.findIndex(
        (product) => product._id === action.payload._id
      );
      state.allProducts[productIndex] = action.payload;
      state.isLoading = false;
    },
    //УДАЛИТЬ ПРОДУКТ
    productRemoved: (state, action) => {
      console.log(action.payload);
      state.allProducts = state.allProducts.filter(
        (products) => products._id !== action.payload
      );
      state.isLoading = false;
    },
  },
});

export const {
  productsRequested,
  productsRecived,
  productsRequestFailed,
  productUpdated,
  productRemoved,
} = productsSlice.actions;
export const { reducer: productsReducer } = productsSlice;

const productUpdateRequested = createAction("products/productUpdateRequested");
const productdDeleteRequested = createAction(
  "products/productdDeleteRequested"
);
const updateProductFailed = createAction("products/updateProductFailed");
const deleteProductFailed = createAction("products/deleteProductFailed");

//ПОЛУЧИТЬ ВСЕ ПРОДУКТЫ
export const loadAllProducts = () => async (dispatch) => {
  dispatch(productsRequested());
  try {
    const data = await productService.get();
    data.sort((a, b) => a.product_id - b.product_id);
    const transformData = data.map((el) => ({
      ...el,
      photos: el.photos.map(transformPath),
    }));
    dispatch(productsRecived(transformData));
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};

export const getAllProducts = () => (state) => state.products.allProducts;
export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading;

//ТЕКУЩИЙ ПРОДУКТ ПО id
export const currentProductById = (productId) => (state) => {
  if (state.products.allProducts) {
    return state.products.allProducts.find((item) => item._id === productId);
  }
};

//ОБНОВИТЬ ПРОДУКТ
export const updatedProduct = (payload, productId) => async (dispatch) => {
  dispatch(productUpdateRequested());
  try {
    const content = await productService.update(payload, productId);
    const transformContent = {
      ...content,
      photos: content.photos.map(transformPath),
    };
    dispatch(productUpdated(transformContent));
  } catch (error) {
    dispatch(updateProductFailed(error.message));
  }
};

//УДАЛИТЬ ПРОДУКТ
export const removeProduct = (productId) => async (dispatch) => {
  dispatch(productdDeleteRequested());
  try {
    const content = await productService.remove(productId);
    if (!content) {
      dispatch(productRemoved(productId));
    }
  } catch (error) {
    dispatch(deleteProductFailed(error.message));
  }
};
