import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../../Common/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAllFromCart } from "../../../../Redux/Cart/cartReducer";
import George from "/George.jpg";

const ModalOrder = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    navigate("/");
    dispatch(deleteAllFromCart());
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={handleClick}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-0" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-end ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-[75px] mr-[550px]  w-full max-w-lg rounded-2xl bg-[#F2F2F2] p-1.5  pb-3 text-center align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto text-center justify-center items-center text-2xl leading-8 overflow-x-hidden mb-1"
                  style={{ maxHeight: "75vh" }}
                >
                  <div className="flex justify-center">
                    <img
                      src={George}
                      alt="George"
                      className="w-auto mb-3 h-96 opacity-80 object-cover rounded-xl blurry-shadow "
                    />
                  </div>
                  <div className="px-10 text-center mb-4">
                    <Dialog.Title>
                      Спасибо за заказ! Мы скоро свяжемся с вами&#x1F604;
                    </Dialog.Title>
                  </div>
                  <Button
                    type="primary"
                    handleClick={handleClick}
                    useFlex={false}
                  >
                    На главную
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalOrder;
