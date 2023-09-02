import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import { calcTotalPrice } from "../utils/calcTotalPrice";
import OrderItem from "../components/UI/Cart/OrderItem";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";
import Button from "../components/Common/Buttons/Button";
import { completionOVerb, completionOfWord } from "../utils/completionOfWord";
import EmptyCart from "../components/UI/Cart/EmptyCart";
import BackButton from "../components/Common/Buttons/BackButton";
import {
  deleteAllFromCart,
  isCartEmptySelector,
} from "../Redux/Cart/cartReducer";
import ModalPreOrder from "../components/UI/Cart/Modal/ModalPreOrder";

const OrderPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const products = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCartEmpty = useSelector(isCartEmptySelector);
  useEffect(() => {
    if (isCartEmpty) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [isCartEmpty]);

  useEffect(() => {
    toast.dismiss();
  }, []);

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
          <div className="my-6 md:my-10 md:p-4 ">
            <div className="text-center flex flex-col space-y-3 p-1.5  md:flex md:flex-row md:justify-between px-2 md:px-12 mb-8 md:mb-10 items-center pt-3 pb-0.5 md:pb-1.5 bg-[#ECEBED]">
              <div className="p-1.5 xl:p-3.5 px-2.5 md:px-10  text-gray-700 text-sm xl:text-xl font-bold border-b-4 rounded-xl border-[#0f6fd1]">
                У Вас {completionOVerb(allProductsCount)}{" "}
                <span className="underline text-gray-500 ">
                  {completionOfWord(allProductsCount)}
                </span>{" "}
                на общую сумму{" "}
                <span className="text-gray-500">
                  {calcTotalPrice(products)} руб
                </span>
                .
              </div>
              <span className="my-4 flex flex-col space-y-1.5  justify-center items-center md:flex-row xl:my-0 ">
                <Button
                  type="white"
                  handleClick={handleDeleteAll}
                  classes="  md:mr-6 hover:scale-105"
                >
                  Очистить корзину
                </Button>
                <Button
                  type="purple"
                  handleClick={handleClock}
                  classes="hover:scale-105"
                >
                  Оформить заказ
                </Button>
                <ModalPreOrder
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </span>
            </div>
            <div className="my-6 xl:px-10 ">
              <OrderItem />
            </div>
          </div>
        </CardWrapper>
      </ContentWrapper>
    </>
  );
};

export default OrderPage;
