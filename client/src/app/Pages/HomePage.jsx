import React, { useEffect, useState } from "react";
import GroupList from "../components/Common/GroupList";
import Shoes from "../components/UI/Shoes/Shoes";
import Pagination from "../components/Common/Pagination";
import Doncic from "/Doncic.jpg";
import { Loader as Spinner } from "../components/Common/Loader";
import SearchNotFound from "../components/UI/SearchNotFound";
import SearchInput from "../components/Common/Inputs/SearchInput";
import DropDownSort from "../components/Common/DropDownButton";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../Redux/Selected/selectedProduct";
import { useSortedItems } from "../Hooks/useSortItems";
import {
  getAllProducts,
  getProductsLoadingStatus,
} from "../Redux/Products/productsReducer";
import {
  getAllCategories,
  getCategoriesLoadingStatus,
} from "../Redux/Categories/categoriesReducer";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedElement, setSelectedElement] = useState(null);
  const pageSize = 4;
  const dispatch = useDispatch();

  const product = useSelector(getAllProducts());
  const category = useSelector(getAllCategories());
  const loadingProductsStatus = useSelector(getProductsLoadingStatus());
  const loadingCategoriesLoadingStatus = useSelector(
    getCategoriesLoadingStatus()
  );

  useEffect(() => {
    //ТУТ ПОПРАВИТЬ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    if (category && !loadingCategoriesLoadingStatus) {
      setSelectedElement(category[0]);
      dispatch(setSelectedProduct(category[0]?.title));
    }
  }, [category, loadingCategoriesLoadingStatus]);

  const handleTitleClick = (item) => {
    if (searchQuery !== "") setSearchQuery("");

    setSelectedElement(item);
    dispatch(setSelectedProduct(selectedElement.title));
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedElement, searchQuery]);

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
    if (target.value === "") {
      setSelectedElement(category[0]);
    } else {
      setSelectedElement(undefined);
    }
  };

  const { sortedItems, setSortedType } = useSortedItems(product ? product : []);

  const filteredProduct =
    sortedItems && searchQuery
      ? sortedItems.filter((el) => {
          return el.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : selectedElement
      ? sortedItems.filter((el) => {
          return (
            JSON.stringify(el.title) === JSON.stringify(selectedElement.title)
          );
        })
      : sortedItems;

  /////////////////////////////////////////////////////////////////////////////

  if (
    product &&
    !loadingProductsStatus &&
    category &&
    !loadingCategoriesLoadingStatus
  ) {
    /////
    const count = product.length;
    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return [...items].slice(startIndex, startIndex + pageSize);
    };

    let productCrop = paginate(
      filteredProduct.length > 0 ? filteredProduct : sortedItems,
      currentPage,
      pageSize
    );
    if (
      category &&
      selectedElement &&
      selectedElement.title === category[0].title
    ) {
      productCrop = paginate(
        filteredProduct.length > 0 ? filteredProduct : sortedItems,
        currentPage,
        pageSize
      );
    }

    if (selectedElement === undefined) {
      productCrop = paginate(
        filteredProduct.length > 0 ? filteredProduct : sortedItems,
        currentPage,
        pageSize
      );
    }

    return (
      <ContentWrapper>
        <SearchInput
          onSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
        />
        <div className="flex flex-col  sm:flex-row mt-1">
          <div className="w-full  lg: mr-2 sm:w-2/3 md:w-1/3  sm:mr-8 py-3.5">
            <GroupList
              activeElement={selectedElement}
              category={category}
              onTitleSelect={handleTitleClick}
            />
            <div className="flex justify-center items-center ">
              <img
                src={Doncic}
                alt="Doncic"
                className="w-[350px] opacity-60 mb-1 rounded-2xl  shadow-lg shadow-indigo-900/40"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/3 md:w-2/3 pl-3">
            {filteredProduct.length === 0 && searchQuery.length ? (
              <SearchNotFound searchQuery={searchQuery} />
            ) : (
              <>
                <span className="flex justify-between items-center my-5 mx-0 border-y-4 py-4 px-3.5  border-[#0f6fd1] border-opacity-50 rounded-2xl">
                  <span className="lg:text-3xl font-bold md:text-2xl sm:text-lg">
                    {selectedElement && selectedElement.title}
                  </span>
                  <DropDownSort setSortType={setSortedType} />
                </span>
                <div className="mt-4">
                  <Shoes shoes={productCrop} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-9 mb-6">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </ContentWrapper>
    );
  } else if (loadingProductsStatus) {
    return <Spinner />;
  }
};

export default HomePage;
