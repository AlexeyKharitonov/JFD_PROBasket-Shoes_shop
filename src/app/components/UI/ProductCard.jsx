import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../Common/Badge";
import Button from "../Common/Buttons/Button";
import FormatPrice from "../Common/FormatPrice";
import { NavLink } from "react-router-dom";
import {
  removeProductInCart,
  setProductInCart,
} from "../../Redux/Cart/cartReducer";

const ProductCard = ({
  id,
  photos,
  numberOfPhoto,
  name,
  tags,
  price,
  sneaker = "",
}) => {
  const products = useSelector((state) => state.cart.productInCart);
  const isProductInCart = products.some((product) => product.id === id);

  const dispatch = useDispatch();

  const handleBuy = (event) => {
    event.preventDefault();
    // event.stopPropagation();
    if (isProductInCart) {
      dispatch(removeProductInCart(id));
    } else {
      dispatch(setProductInCart(sneaker));
    }
  };

  return (
    <div>
      <img
        key={id}
        src={photos[numberOfPhoto]}
        alt="product"
        className="w-full object-cover mb-1 rounded-t-3xl"
      />
      <div className="w-full flex flex-col items-center justify-center mt-0 p-0 pb-0 rounded-shadow">
        <h1 className="text-3xl font-bold mb-1 justify-center">{name}</h1>
        <div className="flex justify-center w-full items-center mt-1 mb-4">
          <span>
            {tags.map((el, index) => (
              <Badge key={index}>{el}</Badge>
            ))}
          </span>
          <FormatPrice price={price} />
        </div>
        <div className="flex justify-end w-full px-3 mt-0 mb-2">
          <NavLink to="/">
            <Button
              type={isProductInCart ? "white" : "primary"}
              handleClick={(event) => handleBuy(event)}
            >
              {isProductInCart ? "Убрать из корзины" : "В корзину"}
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
