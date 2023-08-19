import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counter,
  removeProductFromCart,
} from "../../../Redux/Cart/cartReducer";
import Button from "../../Common/Buttons/Button";
import { NavLink } from "react-router-dom";

const OrderItem = () => {
  const products = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();
  const [, setCounter1] = useState(1);

  const handleIncrement = (productId) => {
    setCounter1((prevState) => {
      const newCount = prevState + 1;
      dispatch(counter({ productId: productId, count: newCount }));
      //здесь я сделаю экшн на уменьшение/увеличение конкретного товара
      // dispatch(products({ productId: productId, count: newCount }));
      return newCount;
    });
  };
  const handleDecrement = (productId) => {
    setCounter1((prevState) => {
      let newCount = prevState - 1;
      if (prevState === 1) newCount = 1;
      dispatch(counter({ productId: productId, count: newCount }));
      return newCount;
    });
  };

  const handleDelete = (id) => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <>
      {products.map((product) => (
        <span key={product.id}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b-2 border-gray-300 rounded-2xl">
            <NavLink to={`/product/${product.id}`}>
              <div className="w-[180px]">
                <img
                  src={product.photos[0]}
                  alt="product"
                  className="mb-1 rounded-3xl"
                />
              </div>
            </NavLink>
            <NavLink to={`/product/${product.id}`}>
              <span className=" mr-4 text-2xl font-bold">{product.name}</span>{" "}
            </NavLink>
            <div className="flex items-center">
              <span className="mr-8">
                <span className=" font-semibold">
                  <button
                    className="bg-blue-500 text-white font-bold py-1 px-3 rounded-xl text-2xl"
                    onClick={() => handleDecrement(product.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{count[product.id] || 1}</span>
                  <button
                    className="bg-blue-500 text-white font-bold py-1 px-3 rounded-xl text-2xl"
                    onClick={() => handleIncrement(product.id)}
                  >
                    +
                  </button>
                </span>
              </span>
              <span className="text-center mr-8 font-semibold px-2.5 py-1 rounded-xl text-white bg-gray-500 w-[106px]">
                {sizes[product.id]} разм.
              </span>
              <span className="text-center mr-8 text-lg ">
                <span className="underline">{product.price}</span>
                <span> руб.</span>
              </span>
              <Button
                type="danger"
                handleClick={() => handleDelete(product.id)}
              >
                Удалить
              </Button>
            </div>
          </div>
        </span>
      ))}
    </>
  );
};

export default OrderItem;
