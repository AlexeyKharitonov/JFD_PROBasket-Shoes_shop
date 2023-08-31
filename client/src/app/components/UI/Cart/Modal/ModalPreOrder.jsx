import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import { deleteAllFromCart } from "../../../../Redux/Cart/cartReducer";
import Button from "../../../Common/Buttons/Button";
import TextField from "../../../Common/Inputs/TextField";
import TextArea from "../../../Common/Inputs/TextArea";
import ModalOrder from "./ModalOrder";
import Clippers_Dallas from "/Clippers_Dallas.jpeg";

const ModalPreOrder = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isFirstModalHidden, setIsFirstModalHidden] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    setIsFirstModalHidden(true);
    setTimeout(() => {
      navigate("/");
      dispatch(deleteAllFromCart());
    }, 6000);
    setModalOpen(true);
  };

  useEffect(() => {
    if (errors.addres) {
      toast.error("Пожалуйста, укажите адрес доставки", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [errors]);

  const styles = isFirstModalHidden
    ? {
        opacity: 0,
        visibility: "hidden",
        transition:
          "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out 0.5s",
      }
    : {
        opacity: 1,
        visibility: "visible",
        transition: "opacity 0.5s ease-in-out",
      };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={onClose}
          style={styles}
        >
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
              className="fixed inset-0 bg-black bg-opacity-70"
              onClose={onClose}
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-end">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" mt-[10px] mr-[500px]  w-full max-w-xl rounded-2xl bg-[#F2F2F2] text-center align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto overflow-x-hidden"
                  style={{ maxHeight: "102vh" }}
                >
                  <Dialog.Title
                    as="h3"
                    className=" text-gray-800 font-normal text-lg "
                  >
                    <div className="mx-0 text-left my-2.5 items-center space-y-1">
                      <div className="flex justify-start  px-6">
                        <form
                          className="w-full mx-auto bg-[#EEEEEE] p-1.5 rounded-xl py-0 shadow-2xl"
                          onSubmit={handleSubmit(onSubmit)}
                        >
                          <div className="text-4xl font-bold  pb-3.5 text-center">
                            Оформление заказа
                          </div>
                          <TextField
                            name="addres"
                            label="Ваш адрес для доставки"
                            placeholder="Область, город, улица, дом (, квартира)"
                            register={register}
                            rules={{
                              required: "Адрес обязателен",
                              minLength: {
                                value: 4,
                                message:
                                  "Адрес должен содержать минимум 15 символа",
                              },
                            }}
                            error={errors.addres}
                          />
                          <TextArea
                            name="comments"
                            label="Ваши комментарии к заказу"
                            register={register}
                            onChange={(e) => null}
                            placeholder="Ваши комментарии по заказу при желании😊..."
                          />
                        </form>
                      </div>
                    </div>
                    <div
                      className="flex relative justify-center w-auto mb-0 h-[326px] opacity-80 rounded-md blurry-shadow "
                      style={{
                        backgroundImage: `url(${Clippers_Dallas})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex absolute justify-center pt-3 space-x-28 pl-2 pr-[61px] z-10 ">
                        <Button
                          type="primary"
                          handleClick={handleSubmit(onSubmit)}
                          className="hover:scale-105 "
                        >
                          Далее к заказу
                        </Button>
                        <ModalOrder isOpen={isModalOpen} />
                        <Button type="gray" handleClick={onClose}>
                          Отмена
                        </Button>
                      </div>
                    </div>
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
ModalPreOrder.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalPreOrder;
