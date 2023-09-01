import { Fragment, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import Button from "../../../Common/Buttons/Button";
import TextField from "../../../Common/Inputs/TextField";
import TextArea from "../../../Common/Inputs/TextArea";
import heat from "/heat.jpeg";

const ModalFeed = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const [, setModalOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {
    setTimeout(() => {
      navigate("/");
    }, 1000);
    setModalOpen(true);
  };

  useEffect(() => {
    if (errors.addres) {
      toast.error("Пожалуйста, введите Ваше имя и Ваш отзыв", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [errors]);

  useEffect(() => {
    if (errors.name && errors.feedback) {
      toast.error("Пожалуйста, укажите адрес доставки", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [errors]);

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
              className="fixed inset-0 bg-black bg-opacity-70"
              onClose={onClose}
            />
          </Transition.Child>

          <div className="fixed inset-0 flex items-start justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className=" mt-[10px] w-full max-w-md md:max-w-xl rounded-2xl bg-[#F2F2F2] text-center align-middle shadow-xl transition-all">
                <div
                  className="overflow-y-auto overflow-x-hidden"
                  style={{ maxHeight: "100vh" }}
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
                            Отзыв
                          </div>
                          <TextField
                            name="name"
                            label="Введите Ваше имя"
                            placeholder="Ваше имя"
                            register={register}
                            rules={{
                              required: "Имя обязательно",
                              minLength: {
                                value: 4,
                                message:
                                  "Имя должно содержать минимум 4 символа",
                              },
                            }}
                            error={errors.name}
                          />
                          <TextArea
                            name="feedback"
                            label="Ваш отзыв"
                            register={register}
                            onChange={(e) => null}
                            placeholder="Напишите Ваш отзыв :) ..."
                            rules={{
                              required: "Отзыв обязателен",
                            }}
                            error={errors.feedback}
                          />
                        </form>
                      </div>
                    </div>
                    <div
                      className="flex relative justify-center w-auto  h-[300px] opacity-80  blurry-shadow "
                      style={{
                        backgroundImage: `url(${heat})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    >
                      <div className="flex absolute justify-center pt-14 space-x-16 pl-2  z-10 ">
                        <Button
                          type="primary"
                          handleClick={handleSubmit(onSubmit)}
                          classes="hover:scale-102 "
                        >
                          Оставить отзыв
                        </Button>
                        <Button
                          type="gray"
                          handleClick={onClose}
                          classes="hover:scale-102 "
                        >
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
ModalFeed.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalFeed;
