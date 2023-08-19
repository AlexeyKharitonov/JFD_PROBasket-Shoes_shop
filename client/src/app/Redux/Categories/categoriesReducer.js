import { createSlice } from "@reduxjs/toolkit";
import categoriesService from "../../Services/categories";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    allCategories: [],
    isLoading: false,
    errors: null,
  },
  reducers: {
    //ЗАПРОСИЛИ ВСЕ Категории
    categoriesRequested: (state) => {
      state.isLoading = true;
    },
    //Категории ПРИШЛИ
    categoriesRecived: (state, action) => {
      state.allCategories = action.payload;
      state.isLoading = false;
    },
    //ЗАПРОС НЕ ПРОШЕЛ, ошибка
    categoriesRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  categoriesRequested,
  categoriesRecived,
  categoriesRequestFailed,
} = categoriesSlice.actions;
export const { reducer: categoriesReducer } = categoriesSlice;

//ПОЛУЧИТЬ ВСЕ КАТЕГОРИИ
export const loadAllCategories = () => async (dispatch) => {
  dispatch(categoriesRequested());
  try {
    const data = await categoriesService.fetchAll();
    dispatch(categoriesRecived(data));
  } catch (error) {
    dispatch(categoriesRequestFailed(error.message));
  }
};

export const getAllCategories = () => (state) => state.categories.allCategories;
export const getCategoriesLoadingStatus = () => (state) =>
  state.categories.isLoading;
