import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProductInCart } from "../../../Redux/Cart/cartReducer";
import Button from "../../Common/Buttons/Button";

const OrderItem = () => {
  const products = useSelector((state) => state.cart.productInCart);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProductInCart(id));
  };

  return (
    <>
      {products.map((product) => (
        <div
          className="flex justify-between items-center mb-6"
          key={product.id}
        >
          <div className="w-[200px]">
            <img
              src={product.photos[0]}
              alt="product"
              className="mb-1 rounded-3xl"
            />
          </div>
          <span className=" mr-4 text-2xl font-bold">{product.name}</span>{" "}
          <div className="flex items-center">
            <span className="text-center mr-8">{product.price} руб.</span>
            <Button type="danger" handleClick={() => handleDelete(product.id)}>
              Удалить
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default OrderItem;
