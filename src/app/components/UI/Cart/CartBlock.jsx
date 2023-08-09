import React, { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import ModalCart from "./Modal/ModalCart";
import CounterInCart from "./CounterInCart";
import { removeProductInCart } from "../../../Redux/Cart/cartReducer";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.productInCart);
  const totalPrice = calcTotalPrice(items);
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProductInCart(id));
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="relative flex items-center">
      <div className="relative">
        <span onClick={openModal}>
          <IoMdCart
            size={40}
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
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default CartBlock;
