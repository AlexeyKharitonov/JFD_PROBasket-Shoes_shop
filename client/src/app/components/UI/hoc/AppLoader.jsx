import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllProducts } from "../../../Redux/Products/productsReducer";
import { loadAllCategories } from "../../../Redux/Categories/categoriesReducer";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProducts());
    dispatch(loadAllCategories());
  }, [dispatch]);

  return children;
};

export default AppLoader;
