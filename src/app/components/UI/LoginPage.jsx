import React from "react";
import { useForm } from "react-hook-form";
import Russ from "/Russ.jpg";
import { useNavigate } from "react-router-dom";

import TextField from "../Common/TextField";
import Button from "../Common/Buttons/Button";

const LoginPage = () => {
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/auth/register");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
    alert(`твой ник ${data.Login}`);
    reset();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
      <div className="hidden sm:block relative h-screen">
        <img
          src={Russ}
          alt="Russ"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90 rounded-sm blurry-shadow"
        />
      </div>

      <div className=" flex flex-col justify-start my-16">
        <form
          className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-xl shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-5xl font-semibold text-left py-3">Вход</h2>
          <TextField
            name="Login"
            label="Логин"
            placeholder="Логин"
            register={register}
            rules={{ required: "Логин обязателен" }}
            error={errors.Login}
          />
          <TextField
            name="Password"
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
            error={errors.Password}
          />
          <Button
            classes={
              "border w-full mt-5 mb-3 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300"
            }
            size="btnMedium"
          >
            Войти
          </Button>
          <div className="flex justify-between items-start text-base">
            <p className="flex items-center">
              <input className="mr-1.5 w-4 h-4" type="checkbox" /> Администратор
            </p>
            <div className="flex flex-col items-end underline">
              <button onClick={handlelick}>
                <p>Нет аккаунта?</p>
                <p>Зарегистрируйтесь</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
