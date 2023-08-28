import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Badge from "../../Common/Badge";
import Button from "../../Common/Buttons/Button";
import FormatPrice from "../../Common/FormatPrice";
import {
  removeProductFromCart,
  setProductInCart,
  selectSizeInCart,
  removeSizeFromCart,
} from "../../../Redux/Cart/cartReducer";
import { removeProduct } from "../../../Redux/Products/productsReducer";
import SizesList from "../../Common/SizesList";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import localStorageService from "../../../Services/localStorage.service";
import { RiDeleteBack2Fill } from "react-icons/ri";

const ProductCard = ({ sneaker }) => {
  const { _id, photos, sizes, name, tags, price } = sneaker;
  const products = useSelector((state) => state.cart.productInCart);
  const sizesInCart = useSelector((state) => state.cart.selectedSize);

  const isAdmin = localStorageService.getIsAdmin();
  const isProductInCart = products.some((product) => product._id === _id);
  const dispatch = useDispatch();

  const initialState = localStorage.getItem("selectedSize");
  const [selectedSize, setSelectedSize] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("selectedSize", selectedSize);
  }, [selectedSize]);

  const [sizeNotSelected, setSizeNotSelected] = useState(false);

  const productSizeInCart = sizesInCart.find((item) => item._id === _id);

  const handleBuy = (event) => {
    event.preventDefault();
    if (!selectedSize) {
      setSizeNotSelected(true);
      toast.error("Пожалуйста, выберете размер товара", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else {
      setSizeNotSelected(false);
      toast.dismiss();
    }

    if (isProductInCart) {
      dispatch(removeProductFromCart(_id));
      dispatch(removeSizeFromCart(_id));
      setSelectedSize(null);
    } else {
      dispatch(setProductInCart(sneaker));
      toast.error("Товар добавлен в корзину", {
        position: toast.POSITION.BOTTOM_CENTER,
        className: "custom-toast-error",
        progressClassName: "bg-[#0f6fd1]",
      });
    }
  };

  const handleSizeSelect = (sizeOfProduct) => {
    setSelectedSize(null);
    dispatch(removeSizeFromCart(_id));
    if (sizeOfProduct !== selectedSize) {
      setSelectedSize(sizeOfProduct);
      dispatch(selectSizeInCart({ _id, size: sizeOfProduct }));
    }

    // if (sizeOfProduct !== selectedSize) {
    //   setSelectedSize(sizeOfProduct);
    //   dispatch(selectSizeInCart({ _id, size: sizeOfProduct }));
    // } else {
    //   setSelectedSize(null);
    //   dispatch(removeSizeFromCart(_id));
    // }
  };

  const handleDelete = (event, id) => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeProduct(id));
  };

  return (
    <div>
      <NavLink to={`/product/${sneaker._id}`} className="relative ">
        <img
          key={_id}
          src={photos[0]}
          alt="product"
          className={`w-full object-cover mb-1 rounded-t-3xl ${
            isAdmin ? "opacity-50" : ""
          }`}
        />

        {isAdmin && (
          <>
            <RiDeleteBack2Fill
              size={72}
              onClick={(event) => handleDelete(event, _id)}
              className="absolute top-4 right-4 cursor-pointer text-[#D96259] hover:text-[#C8524A] hover:scale-105 transition-all "
            />
          </>
        )}
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
              // selected={size === selectedSize}
              selected={
                size === (productSizeInCart ? productSizeInCart.size : null)
              }
              onClick={() => handleSizeSelect(size)}
              sizeNotSelected={sizeNotSelected}
            >
              {size}
            </SizesList>
          ))}
        </span>
        <div
          className={`flex ${
            isAdmin ? "justify-between" : "justify-end"
          }  items-center w-full px-3 mt-0 mb-2`}
        >
          {isAdmin ? (
            <>
              <NavLink to={`/edit/${sneaker._id}`}>
                <Button type="gray">Изменить</Button>
              </NavLink>
              <Button
                type={isProductInCart ? "white" : "primary"}
                handleClick={(event) => handleBuy(event)}
              >
                {isProductInCart ? "Убрать" : "В корзину"}
              </Button>
            </>
          ) : (
            <Button
              type={isProductInCart ? "white" : "primary"}
              handleClick={(event) => handleBuy(event)}
            >
              {isProductInCart ? "Убрать" : "В корзину"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
ProductCard.propTypes = {
  sneaker: PropTypes.object.isRequired,
};

export default ProductCard;
