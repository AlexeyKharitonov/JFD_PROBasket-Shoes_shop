import React from "react";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../utils/calcTotalPrice";
import OrderItem from "../components/UI/Cart/OrderItem";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import Button from "../components/Common/Buttons/Button";
import { completionOVerb, completionOfWord } from "../utils/completionOfWord";
import ModalOrder from "../components/UI/Cart/Modal/ModalOrder";
import { useState } from "react";
import EmptyCart from "../components/UI/Cart/EmptyCart";
import BackButton from "../components/Common/Buttons/BackButton";
import { deleteAllFromCart } from "../Redux/Cart/cartReducer";

const OrderPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const products = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();

  const handleClock = () => {
    setModalOpen(true);
  };

  const handleDeleteAll = () => {
    dispatch(deleteAllFromCart());
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const allProductsCount = products.reduce(
    (acc, product) => acc + product.count,
    0
  );

  if (!products.length) return <EmptyCart />;
  return (
    <>
      <div className="ml-4">
        <BackButton />
      </div>
      <ContentWrapper>
        <CardWrapper>
          <div className="my-10 p-4 ">
            <div className="flex justify-between px-8 mb-10 items-center border-b-4 py-4 rounded-lg  border-[#0f6fd1] ">
              <div className="my-0 p-4 w-4/4 text-xl font-bold ">
                У Вас {completionOVerb(allProductsCount)}{" "}
                {completionOfWord(allProductsCount)} на общую сумму{" "}
                {calcTotalPrice(products)} руб.
              </div>
              <span className="flex">
                <Button
                  type="purple"
                  handleClick={handleDeleteAll}
                  classes="mr-4 hover:scale-105"
                >
                  Очистить корзину
                </Button>
                <Button
                  type="white"
                  handleClick={handleClock}
                  classes=" hover:scale-105"
                >
                  Оформить заказ
                </Button>
                <ModalOrder isOpen={isModalOpen} onClose={handleCloseModal} />
              </span>
            </div>
            <div className="my-6 px-10  ">
              <OrderItem />
            </div>
          </div>
        </CardWrapper>
      </ContentWrapper>
    </>
  );
};

export default OrderPage;
