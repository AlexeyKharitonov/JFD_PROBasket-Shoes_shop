import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../../Common/Badge";
import Button from "../../Common/Buttons/Button";
import FormatPrice from "../../Common/FormatPrice";
import {
  removeProductFromCart,
  setProductInCart,
  selectSize,
  deleteSelectedSize,
} from "../../../Redux/Cart/cartReducer";
import SizesList from "../../Common/SizesList";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { isAdmin } from "../../../Redux/Users/usersReducer";

const ProductCard = ({ sneaker, className }) => {
  const { _id, photos, sizes, name, tags, price } = sneaker;
  const products = useSelector((state) => state.cart.productInCart);
  const isCurrentAdmin = useSelector(isAdmin());
  console.log("isCurrentAdmin", isCurrentAdmin);

  const isProductInCart = products.some((product) => product._id === _id);
  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState(null);
  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const handleBuy = (event) => {
    event.preventDefault();
    if (!selectedSize) {
      setSizeNotSelected(true);
      toast.error("Пожалуйста, выберете размер", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      setSizeNotSelected(false);
      toast.dismiss();
    }

    if (isProductInCart) {
      dispatch(removeProductFromCart(_id));
      dispatch(deleteSelectedSize(_id));
      setSelectedSize(null);
    } else {
      dispatch(setProductInCart(sneaker));
    }
  };

  const handleSizeSelect = (sizeOfProduct) => {
    if (sizeOfProduct === selectedSize) {
      setSelectedSize(null);
      dispatch(deleteSelectedSize(_id));
    } else {
      setSelectedSize(sizeOfProduct);
      dispatch(selectSize({ productId: _id, size: sizeOfProduct }));
    }
  };

  return (
    <div>
      <NavLink to={`/product/${sneaker._id}`}>
        <img
          key={_id}
          src={photos[0]}
          alt="product"
          className="w-full object-cover mb-1 rounded-t-3xl "
        />
      </NavLink>
      <div className="w-full flex flex-col items-center justify-center mt-0 p-0 pb-0 rounded-shadow">
        <NavLink to={`/product/${sneaker._id}`}>
          <h1 className="text-3xl font-bold mb-1 justify-center">{name}</h1>
        </NavLink>
        <div className="flex justify-center w-full items-center mt-1 mb-3">
          <span>
            {tags.map((el, index) => (
              <Badge key={index}>{el}</Badge>
            ))}
          </span>
          <FormatPrice price={price} />
        </div>
        <span className="flex justify-center opacity-75">
          <span
            className={`text-base text-gray-700  mr-1 font-bold ${
              sizeNotSelected ? "text-red-600" : "text-gray-700"
            }`}
          >
            Размеры:{" "}
          </span>
          {sizes.map((size, index) => (
            <SizesList
              key={index}
              selected={size === selectedSize}
              onClick={() => handleSizeSelect(size)}
              sizeNotSelected={sizeNotSelected}
            >
              {size}
            </SizesList>
          ))}
        </span>
        <div className="flex justify-end w-full px-3 mt-0 mb-2">
          {isCurrentAdmin && <Button type="white">Редактировать</Button>}
          <Button
            type={isProductInCart ? "white" : "primary"}
            handleClick={(event) => handleBuy(event)}
          >
            {isProductInCart ? "Убрать из корзины" : "В корзину"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
