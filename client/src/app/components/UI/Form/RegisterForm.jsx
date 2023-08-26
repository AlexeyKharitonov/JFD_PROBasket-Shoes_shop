import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import newRose from "/newRose.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextField from "../../Common/Inputs/TextField";
import Button from "../../Common/Buttons/Button";
import {
  allErrors,
  getIsLoggedIn,
  getUsersLoadingStatus,
  // setIsAdmin,
  signUp,
  authResetErrors,
} from "../../../Redux/Users/usersReducer";
import { Loader as Spinner } from "../../Common/Loader";
import { toast } from "react-toastify";
import BackButton from "../../Common/Buttons/BackButton";
import { TbLogin } from "react-icons/tb";

const RegisterForm = () => {
  const [isAdminChecked, setIsAdminChecked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/auth/login");
  };
  const loadingStatus = useSelector(getUsersLoadingStatus());
  const isLoggedIn = useSelector(getIsLoggedIn());
  const currentError = useSelector(allErrors());

  useEffect(() => {
    dispatch(authResetErrors());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      reset();
    }
  }, [isLoggedIn]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    if (errors.login && errors.password && errors.phone && errors.email) {
      toast.error("Пожалуйста, зарегистрируйтесь", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [errors]);

  const onSubmit = (data, event) => {
    event.preventDefault();
    // dispatch(setIsAdmin({ isAdminChecked }));
    dispatch(signUp(data));

    // reset();
    // navigate("/");
  };

  const handleAdmin = ({ target }) => {
    setIsAdminChecked(target.checked);
  };

  if (loadingStatus) {
    return <Spinner />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      <div className="hidden md:block relative h-screen">
        <img
          src={newRose}
          alt="Rose"
          className="w-full h-full opacity-80 object-cover rounded-md blurry-shadow"
        />
      </div>

      <div className="flex flex-col justify-start my-4">
        <div className="ml-3.5">
          <BackButton />
        </div>
        <form
          className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-xl shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-5xl font-semibold text-left py-2">Регистрация</h2>
          <TextField
            name="login"
            label="Логин"
            placeholder="Логин"
            register={register}
            rules={{
              required: "Логин обязателен",
              minLength: {
                value: 4,
                message: "Логин должен содержать минимум 4 символа",
              },
            }}
            error={errors.login}
          />
          <TextField
            name="email"
            label="Электронная почта"
            placeholder="example@example.ru"
            register={register}
            rules={{
              required: "Электронная почта обязательна",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Неверный формат электронной почты",
              },
            }}
            error={errors.email}
          />
          <TextField
            name="phone"
            label="Номер телефона"
            placeholder="+7 (9XX)-XXX-XX-XX"
            type="text"
            register={register}
            rules={{
              required: "Номер телефона обязателен",
              pattern: {
                value:
                  /^(?:\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$/,
                message: "Неверный формат электронной почты",
              },
            }}
            error={errors.phone}
          />
          <TextField
            name="password"
            label="Пароль"
            placeholder="Пароль"
            type="password"
            register={register}
            rules={{
              required: "Пароль обязателен",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            }}
            error={errors.password}
          />
          <Button
            classes={
              "border w-full mt-4 mb-3 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300"
            }
            size="btnMedium"
          >
            Зарегистрироваться
          </Button>
          {currentError && (
            <p className="text-red-600 text-sm my-2 px-1.5">{currentError}</p>
          )}
          <div className="flex justify-between items-start text-base">
            <p className="flex items-center">
              <input
                name="isAdmin"
                className="mr-1.5 w-4 h-4"
                {...register("isAdmin")}
                type="checkbox"
                checked={isAdminChecked}
                onChange={handleAdmin}
              />
              Режим администратора
            </p>
            <div className="flex opacity-80 flex-col text-[#0f6fd1] hover:text-[#0b5eb3] font-semibold decoration-[#0f6fd1] items-end underline">
              <span className="flex items-center">
                <button onClick={handlelick} type="button">
                  <p>Уже есть аккаунт?</p>
                  <p>Войдите</p>
                </button>
                <TbLogin size={32} color="#F56344" className="ml-2" />
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
