import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../../Services/authService";
import localStorageService from "../../Services/localStorage.service";
import { generateAuthError } from "../../utils/generateAuthError";
import userService from "../../Services/userService";
import { deleteAllFromCart } from "../Cart/cartReducer";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      isAdmin: localStorageService.getIsAdmin(),
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      isAdmin: localStorageService.getIsAdmin(),
      dataLoaded: false,
    };

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true;
    },
    usersRecived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    //поле установки статуса админа
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    authResetErrors: (state) => {
      state.error = null;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    authRequested: (state) => {
      state.error = null;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  usersRequested,
  usersRecived,
  usersRequestFailed,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  setAdminStatus,
  authResetErrors,
} = actions;

const authRequested = createAction("users/authRequested");

export const login = (payload) => async (dispatch) => {
  const { login, password } = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({ login, password });
    localStorageService.setTokens(data);
    await dispatch(loadUsersList());
    dispatch(authRequestSuccess({ userId: data.userId }));
  } catch (error) {
    const { code, message } = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(error.message));
    }
  }
};

//Регистрация
export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  dispatch(setAdminStatus(payload.isAdmin));
  localStorageService.setAdmin(payload.isAdmin);
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));

    await dispatch(loadUsersList());
  } catch (error) {
    const { code, message } = error.response.data.error;
    if (code === 400) {
      const errorMessage = generateAuthError(message);
      dispatch(authRequestFailed(errorMessage));
    } else {
      dispatch(authRequestFailed(error.message));
    }
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  localStorageService.removeAdmin();
  localStorageService.clearAllCart();
  dispatch(deleteAllFromCart());
  dispatch(userLoggedOut());
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

export function loadUsersList() {
  return async (dispatch) => {
    dispatch(usersRequested());
    try {
      const content = await userService.get();
      dispatch(usersRecived(content));
    } catch (error) {
      dispatch(usersRequestFailed(error.message));
    }
  };
}

export const getUsersList = () => (state) => state.users.entities;

export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((u) => u._id === state.users.auth.userId)
    : null;
};

export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => u._id === userId);
  }
};

export const allErrors = () => (state) => state.users.error;

export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
// export const getCurrentUserId = () => (state) => state.users.auth.userId;
// export const getAuthErrors = () => (state) => state.users.error;

export { authResetErrors };
export default usersReducer;
