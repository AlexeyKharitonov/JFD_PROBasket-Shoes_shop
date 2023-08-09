import React, { useEffect, useState } from "react";
// import { getById } from "../API/DATA";
import { useParams } from "react-router-dom";
import { Loader as Spinner } from "../components/Common/Loader";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import BackButton from "../components/Common/Buttons/BackButton";
import ProductCard from "../components/UI/ProductCard";
import ProductDescription from "../components/UI/ProductDescription";
import { useSelector } from "react-redux";
import Slider from "../components/UI/Slider";
import { currentProductById } from "../Redux/Products/productsReducer";

const Product = () => {
  // const [product, setProduct] = useState(null);
  const { id } = useParams();
  const product = useSelector(currentProductById(id));

  // useEffect(() => {
  //   getById(parseInt(id)).then((data) => setProduct(data));
  // }, [id]);
  if (!product) {
    return (
      <div
        className="text-2xl flex justify-center items-center h-screen mt-2"
        style={{ marginTop: "-12vh" }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="ml-4">
        <BackButton />
      </div>
      <ContentWrapper>
        <div className="flex my-0 rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] p-10 shadow-indigo-900/40 gap-6">
          <Slider product={product} />
          <div className="flex-1 flex flex-col space-y-5">
            <CardWrapper>
              <>
                {/* <div className="flex flex-col items-center justify-center "> */}
                <ProductCard
                  id={product.id}
                  photos={product.photos}
                  sneaker={product}
                  numberOfPhoto={3}
                  name={product.name}
                  tags={product.tags}
                  price={product.price}
                />
              </>
            </CardWrapper>
            <CardWrapper>
              <ProductDescription
                description={product.description}
                playingThem={product.playingThem}
              />
            </CardWrapper>
          </div>
        </div>
      </ContentWrapper>
    </>
  );
};

export default Product;
