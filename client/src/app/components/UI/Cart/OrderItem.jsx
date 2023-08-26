import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  decrementCount,
  isCartEmptySelector,
} from "../../../Redux/Cart/cartReducer";
import Button from "../../Common/Buttons/Button";
import ModalDelete from "./Modal/ModalDelete";
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";

const OrderItem = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const isCartEmpty = useSelector(isCartEmptySelector);

  const navigate = useNavigate();
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const products = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);

  useEffect(() => {
    if (isCartEmpty === true) {
      navigate("/");
    }
  }, [isCartEmpty, navigate]);

  const getSizeForProduct = (Id) => {
    const size = sizes.find((s) => s._id === Id);
    return size;
  };
  const dispatch = useDispatch();

  const handleIncrement = (productId) => {
    dispatch(incrementCount(productId));
  };
  const handleDecrement = (productId) => {
    dispatch(decrementCount(productId));
  };

  return (
    <>
      {products.map((product) => (
        <span key={product._id}>
          <div className="flex justify-between items-center pb-4 mb-4 border-b-2 border-gray-300 rounded-2xl">
            <NavLink to={`/product/${product._id}`}>
              <div className="w-[180px] hidden xl:block hover:opacity-75">
                <img
                  src={product.photos[0]}
                  alt="product"
                  className="mb-1 rounded-2xl"
                />
              </div>
            </NavLink>
            <NavLink to={`/product/${product._id}`}>
              <span className="mr-4 text-sm font-medium xl:text-2xl xl:font-bold hover:opacity-50">
                {product.name}
              </span>
            </NavLink>

            <span className="flex items-center">
              <span className=" mr-8">
                <span className=" font-semibold">
                  <button
                    className=" py-0 px-2"
                    onClick={() => handleDecrement(product._id)}
                  >
                    <BsDashCircleFill
                      size={31}
                      color="#0f6fd1"
                      className="leading-none"
                    />
                  </button>
                  <span className="mx-0.5 leading-normal pb-8">
                    {product.count}
                  </span>
                  <button
                    className=" py-0 px-2 "
                    onClick={() => handleIncrement(product._id)}
                  >
                    <BsPlusCircleFill
                      size={31}
                      color="#0f6fd1"
                      className="leading-none"
                    />
                  </button>
                </span>
              </span>
              <span className="text-center mr-8 font-semibold px-2.5 py-1 rounded-xl text-white bg-gray-400 w-[106px]">
                {getSizeForProduct(product._id).size} разм.
              </span>
              <span className="text-center mr-8 text-lg ">
                <span className="underline">{product.price}</span>
                <span> руб.</span>
              </span>
              <Button type="danger" handleClick={handleOpen}>
                Удалить
              </Button>
              <ModalDelete
                isOpen={isModalOpen}
                id={product._id}
                onClose={handleCloseModal}
              />
            </span>
          </div>
        </span>
      ))}
    </>
  );
};

export default OrderItem;
