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
import { TiDeleteOutline } from "react-icons/ti";
import { useMediaQuery } from "react-responsive";

const OrderItem = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 992px)" });

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
          <div className="flex justify-between items-center pb-3 mb-3 xl:border-b-2 border-gray-300 rounded-2xl">
            <NavLink to={`/product/${product._id}`}>
              <div className="w-[177px] hidden md:block hover:opacity-75">
                <img
                  src={product.photos[0]}
                  alt="product"
                  className="mb-1 rounded-2xl"
                />
              </div>
            </NavLink>
            <NavLink to={`/product/${product._id}`}>
              <span className="mr-1.5 md:mr-4 text-sm text-gray-700  font-bold underline md:text-2xl md:no-underline md:font-bold hover:opacity-50">
                {product.name}
              </span>
            </NavLink>

            <span className="flex items-center">
              <span className="flex align-items-center pr-1 md:mr-8">
                <span className="font-semibold flex align-items-center">
                  <button
                    className="py-0 px-0.5 xl:px-1.5"
                    onClick={() => handleDecrement(product._id)}
                  >
                    <FaMinus
                      color="#0f6fd1"
                      className="leading-none w-[0.7rem] h-[0.7rem] md:w-[1.375rem] md:h-[1.375rem]"
                    />
                  </button>
                  <span className=" flex align-items-center text-gray-600 font-normal text-sm md:text-lg xl:font-bold leading-normal px-0 md:px-0.5">
                    {product.count}
                  </span>
                  <button
                    className=" py-0 px-1 md:px-1.5 "
                    onClick={() => handleIncrement(product._id)}
                  >
                    <FaPlus
                      color="#0f6fd1"
                      className="leading-none w-[0.7rem] h-[0.7rem] md:w-[1.375rem] md:h-[1.375rem]"
                    />
                  </button>
                </span>
              </span>
              <span className="text-center mr-2 md:mr-8 font-normal text-xs md:text-lg md:font-semibold opacity-60 px-0.5 md:px-2.5 py-0.5 rounded-3xl text-white bg-gray-400 md:w-[106px]">
                {getSizeForProduct(product._id).size} разм.
              </span>
              <span className="text-center text-gray-600 font-semibold mr-2 md:mr-8 text-xs md:text-lg ">
                <span>{product.price}</span>
                <span> руб.</span>
              </span>
              {isLargeScreen ? (
                <Button
                  type="danger"
                  handleClick={handleOpen}
                  classes="hover:scale-102"
                >
                  Удалить
                </Button>
              ) : (
                <button
                  onClick={handleOpen}
                  className="text-[#D96259] hover:text-[#D15149] mr-1 md:mr-4"
                >
                  <TiDeleteOutline size={28} />
                </button>
              )}
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
