import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { calcTotalPrice } from "../../../../utils/calcTotalPrice";
import ProductName from "../ProductName";
import Button from "../../../Common/Buttons/Button";

const ModalCart = ({ items, isOpen, onClose, onDelete }) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={onClose}>
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

          <div className="fixed inset-0 flex items-start justify-end p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-12 mr-8 w-full max-w-md overflow-hidden rounded-2xl bg-[#F2F2F2] p-6 pb-3 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className=" text-base text-gray-500 font-medium leading-6 "
                >
                  {items.length > 0 ? (
                    <>
                      <div>
                        {items.map((item) => (
                          <ProductName
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            onDelete={onDelete}
                            id={item.id}
                          />
                        ))}
                      </div>
                      <div className="border-t-2 border-[#0F6FD1] border-opacity-75 my-4 flex justify-between">
                        <span className="text-lg font-bold text-gray-700 mt-4">
                          Итого:
                        </span>
                        <span className="text-lg font-bold text-gray-700 mt-4">
                          {calcTotalPrice(items)} руб.
                        </span>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <NavLink to="/order" onClick={onClose}>
                          <Button type="primary">Перейти в корзину</Button>
                        </NavLink>
                      </div>
                    </>
                  ) : (
                    <div className="text-base">В Корзине пока ничего нет.</div>
                  )}
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalCart;
