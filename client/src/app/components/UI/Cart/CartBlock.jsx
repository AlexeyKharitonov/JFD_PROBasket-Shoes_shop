import React, { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import ModalCart from "./Modal/ModalCart";
import CounterInCart from "./CounterInCart";
import { removeProductFromCart } from "../../../Redux/Cart/cartReducer";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);
  const totalPrice = calcTotalPrice(items);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProductFromCart(id));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative flex items-center lg:text-base md:text-sm sm:text-xs">
      <div className="relative lg:text-base md:text-sm sm:text-xs">
        <span onClick={openModal}>
          <IoMdCart
            //Можно и другую иконку
            size={44}
            className="text-[#FCCA3D] hover:text-yellow-600"
          />
        </span>
        <CounterInCart count={items.length} />
      </div>
      <div className="flex flex-col items-end ml-1.5 ">
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
