import { Fragment } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, Transition } from "@headlessui/react";
import { calcTotalPrice } from "../../../../utils/calcTotalPrice";
import ProductName from "../ProductName";
import Button from "../../../Common/Buttons/Button";
import { getIsLoggedIn } from "../../../../Redux/Users/usersReducer";

const ModalCart = ({ isOpen, onClose, onDelete }) => {
  const items2 = useSelector((state) => state.cart.productInCart);
  const sizes = useSelector((state) => state.cart.selectedSize);

  const isLoggedIn = useSelector(getIsLoggedIn());

  const navigate = useNavigate();
  const handleClick = () => {
    if (isLoggedIn) {
      navigate("/order");
    } else {
      navigate("/auth/register");
      toast.error("Пожалуйста, зарегистрируйтесь или войдите в систему", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    onClose();
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
            <div className="fixed inset-0 bg-black bg-opacity-75" />
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
              <Dialog.Panel className="mt-12 mr-8 w-full max-w-md rounded-2xl bg-[#F2F2F2] px-6 py-5  text-left align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto overflow-x-hidden"
                  style={{ maxHeight: "80vh" }}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-base text-gray-500 font-medium leading-6 "
                  >
                    {items2.length !== 0 ? (
                      <>
                        <div>
                          {items2.map((item) => {
                            const productSize = sizes.find(
                              (s) => s._id === item._id
                            )?.size;
                            return (
                              <ProductName
                                key={item._id}
                                name={item.name}
                                price={item.price}
                                onDelete={onDelete}
                                id={item._id}
                                size={productSize}
                              />
                            );
                          })}
                        </div>
                        <div className="border-t-2 border-[#0F6FD1] border-opacity-75 my-4 flex justify-between">
                          <span className="text-lg font-bold text-gray-700 mt-4">
                            Итого:
                          </span>
                          <span className="text-lg font-bold text-gray-700 mt-4">
                            {items2 ? calcTotalPrice(items2) : 0} руб.
                          </span>
                        </div>
                        <div className="mt-2 flex justify-center">
                          <Button type="primary" handleClick={handleClick}>
                            Перейти в корзину
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="text-base flex justify-center">
                        В Корзине пока ничего нет.😔🏀
                      </div>
                    )}
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
ModalCart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ModalCart;
