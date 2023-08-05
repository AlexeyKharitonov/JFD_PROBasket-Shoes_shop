import React, { useEffect, useState } from "react";
import { getById } from "../API/ShoesData";
import { Link, useParams } from "react-router-dom";
import { Loader as Spinner } from "../components/Common/Loader";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import Badge from "../components/Common/Badge";
import FormatPrice from "../components/Common/FormatPrice";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import BackButton from "../components/Common/Buttons/BackButton";
import FavoriteButton from "../components/Common/Buttons/FavoriteButton";

const ProductDetailPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getById(parseInt(id)).then((data) => setProduct(data));
  }, [id]);

  // по слайдеру
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? product.slidersList.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === product.slidersList.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  //

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
    <ContentWrapper>
      <div className="rounded-3xl my-8 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] p-7 shadow-indigo-900/40 flex gap-8">
        {/* Картинка 1 */}

        {/* <div className="flex items-center">
          <img src={product.image} alt="sneaker" className="rounded-3xl" />
        </div> */}

        {/* <div className="flex px-4 pt-8 pb-10 lg:px-8 "> */}
        <div className="pt-8 pb-6  ">
          <BackButton />
        </div>
        {/* //Slider */}
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
          <div
            style={{
              backgroundImage: `url(${product.slidersList[currentIndex]})`,
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {product.slidersList.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>

        {/* // */}

        <div className="flex flex-col space-y-5">
          {/*  */}
          {/* Карточка 1 */}
          <CardWrapper>
            <div className="flex flex-col items-center justify-center p-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-1 mb-6 p-2 text-center">
                {product.name}
              </h1>
              <div className="grid grid-cols-2 gap- items-center justify-center p-0">
                <div className="text-center">
                  <div className="flex flex-col items-center justify-center">
                    <div>
                      <p className="text-md md:text-lg lg:text-xl font-medium mb-4">
                        {product.tags.map((el, index) => (
                          <Badge key={index}>{el}</Badge>
                        ))}
                      </p>
                    </div>
                    <div>
                      <FormatPrice price={product.price} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 items-center justify-center pr-8">
                  <div className="flex flex-col items-center space-y-4">
                    {/* <Link to={`/product/${product.id}`}>
                      <button className="mt-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-base font-bold rounded-3xl hover:from-blue-600 hover:to-blue-200 transition duration-300 ease-in-out shadow-2xl hover:shadow-2xl">
                        Подробнее
                      </button>
                    </Link> */}
                    <button className="text-decoration px-10 py-3 border-2 border-gray-200 bg-white text-[#4361EE] text-base font-bold rounded-3xl hover:bg-[#07B3EA] transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                      Купить
                    </button>
                  </div>
                  <div className="flex justify-center items-center">
                    {/* <button className="mt-3 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-base font-bold rounded-3xl hover:from-green-600 hover:to-green-200 transition duration-300 ease-in-out shadow-2xl hover:shadow-2xl">
                      В избранное
                    </button> */}
                    <FavoriteButton />
                  </div>
                </div>
              </div>
              <div className="text-base md:text-xl lg:text-xl font-semibold my-1 p-2 text-center">
                <div className="mb-6">Размеры в наличии (rus):</div>
                {product.sizes.map((el, index) => (
                  <button onClick="">
                    <Badge key={index}>{el}</Badge>
                  </button>
                ))}
              </div>
            </div>
          </CardWrapper>

          {/* Карточка 2 */}
          <CardWrapper>
            <div className="text-sm text-slate-700 leading-6 p-8">
              <div className="mb-3 font-bold text-xl">Описание</div>
              {product.description}
              <div className="flex items-baseline my-4">
                <span className="font-bold text-lg mr-2 mb-0 mt-0 leading-none">
                  Кто в них играет:
                </span>
                <span className="mb-0 mt-0 leading-none">
                  Леброн Джеймс, Бронни Джеймс
                </span>
              </div>
            </div>
          </CardWrapper>
        </div>
      </div>
      <div className="flex justify-center items-center w-full my-10">
        <img
          src={product.basketballPlayerInSneakers}
          alt="Basketball Player"
          className="rounded-md"
        />
      </div>
    </ContentWrapper>
  );
};

export default ProductDetailPage;
