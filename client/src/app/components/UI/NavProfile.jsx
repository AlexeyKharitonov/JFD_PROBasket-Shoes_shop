import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { NavLink } from "react-router-dom";

const NavProfile = ({ isOpen, onClose, user, loading }) => {
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
            <div
              className="fixed inset-0 bg-black bg-opacity-0"
              onClose={onClose}
            />
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
              <Dialog.Panel className="mt-12 mr-8 lg:mr-24 md:mr-28 sm:mr-14 w-36 max-w-md rounded-xl bg-[#F2F2F2] px-2 py-4  text-left align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto overflow-x-hidden"
                  style={{ maxHeight: "80vh" }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-base text-gray-500 font-medium leading-6 "
                  >
                    <span className="mx-1 flex flex-col items-center space-y-1">
                      <div>Ваш логин:</div>
                      <div className="underline">{!loading && user}</div>
                      <NavLink to="/logout">
                        <button className="border p-6 w-full py-3 rounded-xl mb-0.5 mt-2 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300 transition-all">
                          Выйти
                        </button>
                      </NavLink>
                    </span>
                  </Dialog.Title>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default NavProfile;
