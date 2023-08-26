import { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import ModalCart from "./Modal/ModalCart";
import CounterInCart from "./CounterInCart";
import {
  removeProductFromCart,
  removeSizeFromCart,
} from "../../../Redux/Cart/cartReducer";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);
  const totalPrice = calcTotalPrice(items);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProductFromCart(id));
    dispatch(removeSizeFromCart(id));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative flex items-center lg:text-base md:text-sm sm:text-xs">
      <div className="relative lg:text-base md:text-sm sm:text-xs ">
        <span onClick={openModal}>
          <IoMdCart
            // size={44}
            className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-11 lg:h-11 text-[#FCCA3D] hover:text-yellow-600 "
          />
        </span>
        <CounterInCart count={items.length} />
      </div>
      <div className="flex flex-col items-end ml-1.5 hidden sm:inline-block">
        {totalPrice > 0 ? <div className="mt-5"> {totalPrice} руб.</div> : null}
      </div>
      <ModalCart
        items={items}
        sizes={sizes}
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CartBlock;
