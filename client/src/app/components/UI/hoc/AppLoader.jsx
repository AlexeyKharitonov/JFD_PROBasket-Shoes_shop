import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { loadAllProducts } from "../../../Redux/Products/productsReducer";
import { loadAllCategories } from "../../../Redux/Categories/categoriesReducer";
import { loadUsersList } from "../../../Redux/Users/usersReducer";
import { loadAllFeedBack } from "../../../Redux/FeedBack/feedBackReducer";

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProducts());
    dispatch(loadAllCategories());
    dispatch(loadUsersList());
    dispatch(loadAllFeedBack());
  }, [dispatch]);

  return children;
};
AppLoader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLoader;
