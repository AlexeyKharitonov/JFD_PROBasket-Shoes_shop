import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  decrementCount,
} from "../../../Redux/Cart/cartReducer";
import Button from "../../Common/Buttons/Button";
import ModalDelete from "./Modal/ModalDelete";
import { FaPlus, FaMinus } from "react-icons/fa";

const OrderItem = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const products = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);

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
          <div className="flex justify-between items-center pb-3 mb-3 border-b-2 border-gray-300 rounded-2xl">
            <NavLink to={`/product/${product._id}`}>
              <div className="w-[177px] hidden xl:block hover:opacity-75">
                <img
                  src={product.photos[0]}
                  alt="product"
                  className="mb-1 rounded-2xl"
                />
              </div>
            </NavLink>
            <NavLink to={`/product/${product._id}`}>
              <span className="mr-4 text-sm text-gray-700 font-medium xl:text-2xl xl:font-bold hover:opacity-50">
                {product.name}
              </span>
            </NavLink>

            <span className="flex items-center">
              <span className="flex align-items-center mr-8">
                <span className="font-semibold flex align-items-center">
                  <button
                    className="py-0 px-1.5"
                    onClick={() => handleDecrement(product._id)}
                  >
                    <FaMinus
                      size={22}
                      color="#0f6fd1"
                      className="leading-none"
                    />
                  </button>
                  <span className="flex align-items-center text-[#0f6fd1] font-bold leading-normal px-0.5">
                    {product.count}
                  </span>
                  <button
                    className=" py-0 px-1.5 "
                    onClick={() => handleIncrement(product._id)}
                  >
                    <FaPlus
                      size={22}
                      color="#0f6fd1"
                      className="leading-none"
                    />
                  </button>
                </span>
              </span>
              <span className="text-center mr-8 font-semibold opacity-60 px-2.5 py-0.5 rounded-3xl text-white bg-gray-400 w-[106px]">
                {getSizeForProduct(product._id).size} разм.
              </span>
              <span className="text-center text-gray-600 font-semibold mr-8 text-lg ">
                <span>{product.price}</span>
                <span> руб.</span>
              </span>
              <Button
                type="danger"
                handleClick={handleOpen}
                classes="hover:scale-102"
              >
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
