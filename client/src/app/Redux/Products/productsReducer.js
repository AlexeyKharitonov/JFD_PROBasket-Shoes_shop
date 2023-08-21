import { createSlice } from "@reduxjs/toolkit";
import productService from "../../Services/products.service";
import { transformPath } from "../../utils/transform";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
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
  },
});

export const { productsRequested, productsRecived, productsRequestFailed } =
  productsSlice.actions;
export const { reducer: productsReducer } = productsSlice;

//ПОЛУЧИТЬ ВСЕ ПРОДУКТЫ
export const loadAllProducts = () => async (dispatch) => {
  dispatch(productsRequested());
  try {
    const data = await productService.fetchAll();
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
