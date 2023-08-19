import React, { useEffect, useState } from "react";
// import { getById } from "../API/DATA";
import cort_ncaa from "/cort_ncaa.jpg";
import { useParams } from "react-router-dom";
import { Loader as Spinner } from "../components/Common/Loader";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import BackButton from "../components/Common/Buttons/BackButton";
import ProductCard from "../components/UI/Shoes/ProductCard";
import ProductDescription from "../components/UI/Shoes/ProductDescription";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/UI/Slider";
import {
  currentProductById,
  getProductsLoadingStatus,
} from "../Redux/Products/productsReducer";
// import { fetchAll } from "../API/DATA";

const ProductPage = () => {
  // const [product, setProduct] = useState(null);
  const { id } = useParams();
  const product = useSelector(currentProductById(id));
  const loadingStatus = useSelector(getProductsLoadingStatus());

  //!!!!ЭТО ТОЖЕ ВРЕМЕННО
  const dispatch = useDispatch();
  // useEffect(() => {
  //   fetchAll().then((data) => {
  //     dispatch(loadAllProducts(data));
  //   });
  // }, []);

  //Потом сделаю
  //   import axios from 'axios';
  // const BASE_URL = 'http://your-node-server-url';

  // export const getProductById = (id) => {
  //   return axios.get(`${BASE_URL}/products/${id}`)
  //     .then(response => response.data)
  //     .catch(error => {
  //       console.error("Ошибка при получении продукта:", error);
  //       throw error;
  //     });
  // }

  // useEffect(() => {
  //   getById(parseInt(id)).then((data) => setProduct(data));
  // }, [id]);
  if (loadingStatus) {
    return <Spinner />;
  }

  if (!loadingStatus && product) {
    return (
      <>
        <div className="ml-4">
          <BackButton />
        </div>

        <ContentWrapper>
          <div className="relative">
            <img
              src={cort_ncaa}
              alt="cort_ncaa"
              className="w-full h-[152vh] opacity-80 object-cover rounded-sm blurry-shadow "
            />

            <div className="absolute top-0 left-0 right-0 flex flex-col my-0 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] px-16 py-7 shadow-indigo-900/40 gap-2.5">
              <div className="flex space-x-8 mb-0 items-center">
                <CardWrapper>
                  <ProductDescription
                    description={product.description}
                    playingThem={product.playingThem}
                  />
                </CardWrapper>

                <CardWrapper>
                  <ProductCard id={product.id} sneaker={product} />
                </CardWrapper>
              </div>

              <div className="flex justify-center w-full mt-0 max-w-xl mx-auto">
                <Slider product={product} className="max-h-[500px]" />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </>
    );
  }
};

export default ProductPage;
