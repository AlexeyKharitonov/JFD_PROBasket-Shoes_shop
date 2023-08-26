import React, { useEffect } from "react";
import cort_ncaa from "/cort_ncaa.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { Loader as Spinner } from "../components/Common/Loader";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import BackButton from "../components/Common/Buttons/BackButton";
import ProductCard from "../components/UI/Shoes/ProductCard";
import ProductDescription from "../components/UI/Shoes/ProductDescription";
import { useSelector } from "react-redux";
import Slider from "../components/UI/Slider";
import {
  currentProductById,
  getProductsLoadingStatus,
} from "../Redux/Products/productsReducer";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  let product = useSelector(currentProductById(id));
  // console.log(product.youtube);
  const loadingStatus = useSelector(getProductsLoadingStatus());

  useEffect(() => {
    if (product === undefined) {
      navigate("/");
    }
  }, [product]);

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
          <div className="relative h-[138vh]  xl:h-[229vh] overflow-y-hidden">
            <img
              src={cort_ncaa}
              alt="cort_ncaa"
              className="w-full h-[229vh] opacity-80 object-cover rounded-sm blurry-shadow "
            />

            <div className="absolute top-0 left-0 right-0 flex flex-col my-0 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] px-16 py-7 shadow-indigo-900/40 gap-2.5">
              <div className="flex flex-col space-y-8 xl:space-y-0 items-center xl:flex-row xl:space-x-8 mb-0">
                <div className="max-w-lg">
                  <CardWrapper>
                    <ProductDescription
                      description={product.description}
                      playingThem={product.playingThem}
                    />
                  </CardWrapper>
                </div>
                <div className="max-w-lg">
                  <CardWrapper className="max-w-lg">
                    <ProductCard id={product.id} sneaker={product} />
                  </CardWrapper>
                </div>
              </div>

              <div className="hidden xl:flex justify-between w-full mt-0 max-w-xl mx-auto space-x-4 mb-5">
                <Slider product={product} className="w-1/2 max-h-[500px] " />
              </div>
              <div className="hidden xl:block w-2/3 mx-auto bg-[#F2F2F2] p-3.5 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40 h-[500px] mb-6">
                <iframe
                  className="w-full h-full"
                  src={product.youtube}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </>
    );
  }
};

export default ProductPage;
