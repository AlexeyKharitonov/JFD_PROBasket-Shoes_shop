import React from "react";
import ContentWrapper from "../components/Common/Wrappers/ContentWrapper";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../utils/calcTotalPrice";
import OrderItem from "../components/UI/Cart/OrderItem";
import CardWrapper from "../components/Common/Wrappers/CardWrapper";

const Order = () => {
  const products = useSelector((state) => state.cart.productInCart);
  console.log(products);

  if (!products.length) return <div>В Корзине пока ничего нет.</div>;
  return (
    <ContentWrapper>
      <CardWrapper>
        <div className="my-5 p-4 ">
          {products.length} (ф-ция по склонению) на сумму{" "}
          {calcTotalPrice(products)} руб.
        </div>
        <div className="flex justify-between my-16 p-4">
          <div className="w-3/4">
            <OrderItem />
          </div>
          <div className="w-1/4"></div>
        </div>
      </CardWrapper>
    </ContentWrapper>
  );
};

export default Order;
