import React, { createContext, useContext, useEffect, useState } from "react";
import GroupList from "../components/Common/GroupList";
import Search from "../components/Common/Search";
import Shoes from "../components/UI/Shoes/Shoes";
import Pagination from "../components/Common/Pagination";
import { fetchAll } from "../API/ShoesData";
import { Loader as Spinner } from "../components/Common/Loader";
// import { SelectedTitleContext } from "../../App";
// const data = createContext(SelectedTitleContext);
import { fetchCategoryProduct } from "../API/CategoryProduct";
import SearchNotFound from "../components/Common/SearchNotFound";

const MainPage = () => {
  const [product, setProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState([]);
  const [selectedElement, setSelectedElement] = useState(null);

  const pageSize = 4;
  useEffect(() => {
    fetchAll().then((data) => setProduct(data));
    fetchCategoryProduct().then((data) => {
      setCategory(data);
      setSelectedElement(data[0]);
    });
  }, []);

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

    // if (product.filter((el) => el.title === selectedElement.title)) {
    //   console.log("hello");
    // }
  };

  if (product) {
    const count = product.length;
    const paginate = (items, pageNumber, pageSize) => {
      const startIndex = (pageNumber - 1) * pageSize;
      return [...items].slice(startIndex, startIndex + pageSize);
    };

    console.log(product);

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

    console.log(searchQuery);

    return (
      // <div className="font-[Poppins] bg-gradient-to-t from-[#C0C0C0] to-[#DCDCDC] h-screen">
      // <div className="container xl">
      // <div style={{ backgroundColor: "#E6E6FA", minHeight: "100vh" }}>
      // <div style={{ backgroundColor: "#F5F6FD", minHeight: "100vh" }}>
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Search onSearchQuery={handleSearchQuery} searchQuery={searchQuery} />
          <div className="flex mt-1 ">
            <div className="w-1/3 pr-0 mr-12 py-10">
              <GroupList
                activeElement={selectedElement}
                category={category}
                onTitleSelect={handleTitleClick}
              />
            </div>
            <div className="w-2/3 pl-4 ">
              {filteredProduct.length === 0 && searchQuery.length ? (
                <SearchNotFound searchQuery={searchQuery} />
              ) : (
                <>
                  <div className="mt-4">Тут будет вид товара!</div>
                  <div className="mt-4">
                    <Shoes shoes={productCrop} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-7 mb-2">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
        {/* </div>  */}
      </>
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

export default MainPage;
