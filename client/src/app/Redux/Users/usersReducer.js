import { createAction, createSlice } from "@reduxjs/toolkit";
import authService from "../../Services/authService";
import localStorageService from "../../Services/localStorage.service";
import { generateAuthError } from "../../utils/generateAuthError";
import userService from "../../Services/userService";

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      isAdmin: false,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      isAdmin: false,
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
    //новое поле установки статуса админа
    setAdminStatus: (state, action) => {
      state.isAdmin = action.payload;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    // userCreated: (state, action) => {
    //   if (!Array.isArray(state.entities)) {
    //     state.entities = [];
    //   }
    //   state.entities.push(action.payload);
    //   state.isLoading = false;
    // },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    // userUpdated: (state, action) => {
    //   const userIndex = state.entities.findIndex(
    //     (u) => u._id === action.payload._id
    //   );
    //   state.entities[userIndex] = action.payload;
    // },
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
  // userUpdated,
} = actions;

const authRequested = createAction("users/authRequested");
const userUpdateRequested = createAction("users/userUpdateRequested");
// const updateUserFailed = createAction("users/updateUserFailed");

export const login = (payload) => async (dispatch) => {
  const { login, password } = payload;
  dispatch(authRequested());
  try {
    const data = await authService.login({ login, password });
    localStorageService.setTokens(data);
    await dispatch(loadUsersList());
    dispatch(authRequestSuccess({ userId: data.userId }));

    // history.push(redirect);
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

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    // history.push("/users");

    await dispatch(loadUsersList());
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  // через localStorage потом надо удалить админку!!!!!
};

export const setIsAdmin = (isAdminChecked) => (dispatch) => {
  dispatch(setAdminStatus(isAdminChecked));
};

//ПРОСТО ПРОВЕРКА АДМИН ИЛИ НЕТ

export const isAdmin = () => (state) => state.users.isAdmin;

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;

// export const updateUser = (payload) => async (dispatch) => {
//   dispatch(userUpdateRequested());
//   try {
//     const { content } = await userService.update(payload);
//     dispatch(userUpdated(content));
//   } catch (error) {
//     dispatch(updateUserFailed(error.message));
//   }
// };

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

export default usersReducer;
