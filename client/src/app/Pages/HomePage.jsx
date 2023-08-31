import { useSelector } from "react-redux";
import { Loader as Spinner } from "../components/Common/Loader";
import { getCategoriesLoadingStatus } from "../Redux/Categories/categoriesReducer";
import { getProductsLoadingStatus } from "../Redux/Products/productsReducer";
import AllHomeItems from "../components/UI/Shoes/AllHomeItems";

const HomePage = () => {
  const loadingProductsStatus = useSelector(getProductsLoadingStatus());
  const loadingCategoriesLoadingStatus = useSelector(
    getCategoriesLoadingStatus()
  );

  if (!loadingProductsStatus && !loadingCategoriesLoadingStatus) {
    return <AllHomeItems />;
  } else {
    return <Spinner />;
  }
};

export default HomePage;
