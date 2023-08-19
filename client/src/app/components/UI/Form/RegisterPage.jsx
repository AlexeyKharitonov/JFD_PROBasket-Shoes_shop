import React from "react";
import { useForm } from "react-hook-form";
import newRose from "/newRose.jpg";
import { useNavigate } from "react-router-dom";
import TextField from "../../Common/Inputs/TextField";
import Button from "../../Common/Buttons/Button";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handlelick = () => {
    navigate("/auth/login");
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
    reset();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
      <div className="hidden sm:block relative h-screen">
        <img
          src={newRose}
          alt="Rose"
          className="w-full h-full opacity-80 object-cover rounded-sm blurry-shadow"
        />
      </div>

      <div className="flex flex-col justify-start my-4">
        <form
          className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-xl shadow-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h2 className="text-5xl font-semibold text-left py-2">Регистрация</h2>
          <TextField
            name="Login"
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
            error={errors.Login}
          />
          <TextField
            name="Email"
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
            error={errors.Email}
          />
          <TextField
            name="Phone"
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
            error={errors.Phone}
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
              "border w-full mt-4 mb-3 bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300"
            }
            size="btnMedium"
          >
            Зарегистрироваться
          </Button>
          <div className="flex justify-between items-start text-base">
            <p className="flex items-center">
              <input className="mr-1.5 w-4 h-4" type="checkbox" /> Режим
              администратора
            </p>
            <div className="flex flex-col items-end underline">
              <button onClick={handlelick}>
                <p>Есть аккаунт?</p>
                <p>Войдите</p>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
