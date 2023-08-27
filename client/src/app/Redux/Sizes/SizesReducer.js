import { createSlice } from "@reduxjs/toolkit";
import sizesService from "../../Services/sizes.service";

const sizesSlice = createSlice({
  name: "sizes",
  initialState: {
    allSizes: [],
    isLoading: false,
    errors: null,
  },
  reducers: {
    //ЗАПРОСИЛИ ВСЕ размеры
    sizesRequested: (state) => {
      state.isLoading = true;
    },
    //размеры ПРИШЛИ
    sizesRecived: (state, action) => {
      state.allSizes = action.payload;
      state.isLoading = false;
    },
    //ЗАПРОС НЕ ПРОШЕЛ, ошибка
    sizesRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
  },
});

export const { sizesRequested, sizesRecived, sizesRequestFailed } =
  sizesSlice.actions;
export const { reducer: sizesReducer } = sizesSlice;

//ПОЛУЧИТЬ ВСЕ размеры
export const loadAllSizes = () => async (dispatch) => {
  dispatch(sizesRequested());
  try {
    const data = await sizesService.get();
    data.sort((a, b) => a.size_id - b.size_id);
    dispatch(sizesRecived(data));
  } catch (error) {
    dispatch(sizesRequestFailed(error.message));
  }
};

export const getAllSizes = () => (state) => state.sizes.allSizes;
export const getSizesLoadingStatus = () => (state) => state.sizes.isLoading;
