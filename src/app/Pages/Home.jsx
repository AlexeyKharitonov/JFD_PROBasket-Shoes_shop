import React, { createContext, useContext, useEffect, useState } from "react";
import GroupList from "../components/Common/GroupList";
import Shoes from "../components/UI/Shoes/Shoes";
import Pagination from "../components/Common/Pagination";
import { fetchAll } from "../API/DATA";
import { Loader as Spinner } from "../components/Common/Loader";
// import { SelectedTitleContext } from "../../App";
// const data = createContext(SelectedTitleContext);
import { fetchCategoryProduct } from "../API/CategoryProduct";
import SearchNotFound from "../components/UI/SearchNotFound";
import SearchInput from "../components/Common/SearchInput";
import DropDownButton from "../components/Common/DropDownButton";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import { useDispatch } from "react-redux";
import { loadAllProducts } from "../Redux/Products/productsReducer";

const Home = () => {
  const [product, setProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);
  const pageSize = 4;
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAll().then((data) => {
      setProduct(data);
      dispatch(loadAllProducts(data));
    });
    fetchCategoryProduct().then((data) => {
      setCategory(data);
      setSelectedElement(data[0]);
    });
  }, []);

  // if (product) {
  //   dispatch(loadAllProducts(product));
  // }

  const handleTitleClick = (item) => {
    setSelectedElement(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value);
    if (target.value === "") {
      setSelectedElement(category[0]);
    } else {
      setSelectedElement(undefined);
    }
  };

  if (product) {
    const count = product.length;
    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return [...items].slice(startIndex, startIndex + pageSize);
    };

    const filteredProduct = searchQuery
      ? product.filter((el) => {
          return el.name.toLowerCase().includes(searchQuery.toLowerCase());
        })
      : selectedElement
      ? product.filter(
          (el) =>
            JSON.stringify(el.title) === JSON.stringify(selectedElement.title)
        )
      : product;

    let productCrop = paginate(filteredProduct, currentPage, pageSize);
    if (
      category &&
      selectedElement &&
      selectedElement.title === category[0].title
    ) {
      productCrop = paginate(product, currentPage, pageSize);
    }

    if (selectedElement === undefined) {
      productCrop = paginate(filteredProduct, currentPage, pageSize);
    }

    return (
      <ContentWrapper>
        <SearchInput
          onSearchQuery={handleSearchQuery}
          searchQuery={searchQuery}
        />
        <div className="flex flex-col sm:flex-row mt-1">
          <div className="w-full sm:w-2/3 md:w-1/3 pr-0 sm:mr-8 py-5">
            <GroupList
              activeElement={selectedElement}
              category={category}
              onTitleSelect={handleTitleClick}
            />
          </div>
          <div className="w-full sm:w-1/3 md:w-2/3 pl-3">
            {filteredProduct.length === 0 && searchQuery.length ? (
              <SearchNotFound searchQuery={searchQuery} />
            ) : (
              <>
                <DropDownButton />
                <div className="mt-4">
                  <Shoes shoes={productCrop} />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-7 mb-4">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </ContentWrapper>
    );
  } else {
    return (
      <div
        className="text-2xl flex justify-center items-center h-screen mt-2"
        style={{ marginTop: "-12vh" }}
      >
        <Spinner />
      </div>
    );
  }
};

export default Home;
