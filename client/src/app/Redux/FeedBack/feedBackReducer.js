import { createSlice } from "@reduxjs/toolkit";
import feedBackService from "../../Services/feedBack.Servise";
import { transformPath } from "../../utils/transform";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    allFeedback: [],
    isLoading: false,
    errors: null,
  },
  reducers: {
    //ЗАПРОСИЛИ ВСЕ отзывы
    feedbackRequested: (state) => {
      state.isLoading = true;
    },
    //отзывы ПРИШЛИ
    feedbackRecived: (state, action) => {
      state.allFeedback = action.payload;
      state.isLoading = false;
    },
    //ЗАПРОС НЕ ПРОШЕЛ, ошибка
    feedbackRequestFailed: (state, action) => {
      state.errors = action.payload;
      state.isLoading = false;
    },
  },
});

export const { feedbackRequested, feedbackRecived, feedbackRequestFailed } =
  feedbackSlice.actions;
export const { reducer: feedbackReducer } = feedbackSlice;

//ПОЛУЧИТЬ ВСЕ отзывы
export const loadAllFeedBack = () => async (dispatch) => {
  dispatch(feedbackRequested());
  try {
    const data = await feedBackService.get();
    data.sort((a, b) => a.feedback_id - b.feedback_id);
    const transformfeedBack = data.map((el) => ({
      ...el,
      photo: transformPath(el.photo),
    }));
    dispatch(feedbackRecived(transformfeedBack));
  } catch (error) {
    dispatch(feedbackRequestFailed(error.message));
  }
};

export const getAllFeedBack = () => (state) => state.feedback.allFeedback;
export const getFeedbackLoadingStatus = () => (state) =>
  state.feedback.isLoading;
