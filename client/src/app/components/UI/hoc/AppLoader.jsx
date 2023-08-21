import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllProducts } from "../../../Redux/Products/productsReducer";
import { loadAllCategories } from "../../../Redux/Categories/categoriesReducer";
import { loadUsersList } from "../../../Redux/Users/usersReducer";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProducts());
    dispatch(loadAllCategories());
    dispatch(loadUsersList());
  }, [dispatch]);

  return children;
};

export default AppLoader;
