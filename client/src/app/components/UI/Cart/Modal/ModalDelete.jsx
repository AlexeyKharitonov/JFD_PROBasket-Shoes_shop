import { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch } from "react-redux";
import {
  removeProductFromCart,
  removeSizeFromCart,
} from "../../../../Redux/Cart/cartReducer";
import Button from "../../../Common/Buttons/Button";

const ModalDelete = ({ isOpen, onClose, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeProductFromCart(id));
    dispatch(removeSizeFromCart(id));
  };

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
              className="fixed inset-0 bg-black bg-opacity-80"
              onClose={onClose}
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mt-[166px] px-5 md:px-12 w-full max-w-sm md:max-w-lg rounded-2xl bg-[#F2F2F2] p-12 pb-6    text-center align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto overflow-x-hidden"
                  style={{ maxHeight: "80vh" }}
                >
                  <Dialog.Title
                    as="h3"
                    className=" text-gray-800 font-bold text-2xl leading-6 "
                  >
                    <span className="mx-0 flex flex-col text-center items-center space-y-1">
                      <div className="mb-6 mt-1 leading-tight">
                        Вы действительно хотите удалить данный товар?
                      </div>
                      <div className="flex space-x-11">
                        <Button
                          type="danger"
                          handleClick={() => handleDelete(id)}
                          className="hover:scale-105"
                        >
                          Удалить
                        </Button>
                        <Button type="gray" handleClick={onClose}>
                          Назад
                        </Button>
                      </div>
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
ModalDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ModalDelete;
