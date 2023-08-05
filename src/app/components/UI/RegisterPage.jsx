import React from "react";
import Rose from "/Rose.jpg";
import { NavLink } from "react-router-dom";
import TextField from "../Common/TextField";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full">
      <div className="hidden sm:block   ">
        <img
          src={Rose}
          alt="Russ"
          className="w-full h-full opacity-70 object-cover rounded-sm blurry-shadow"
        />
      </div>

      <div className="flex flex-col justify-start my-16">
        <form className="max-w-[450px] w-full mx-auto bg-[#EEEEEE] p-8 rounded-xl shadow-2xl">
          <h2 className="text-5xl font-semibold text-left py-3">Регистрация</h2>
          <TextField
            name="Login"
            label="Логин"
            // value="name"
            placeholder="Логин"
          />
          <TextField
            name="Email"
            label="Электронная почта"
            // value="name"
            placeholder="Электронная почта"
          />
          <TextField
            name="Password"
            label="Пароль"
            type="password"
            // value="name"
            placeholder="Пароль"
          />
          <TextField
            name="Phone"
            label="Номер телефона"
            type="number"
            // value="phone"
            placeholder="Номер телефона"
          />
          <button className="border w-full rounded-3xl mt-5 mb-3 py-3 text-base font-semibold  bg-[#0f6fd1] hover:bg-[#0b5eb3] text-white hover:text-gray-300">
            Войти
          </button>
          <div className="flex justify-between items-start text-base">
            <p className="flex items-center">
              <input className="mr-1.5 w-4 h-4" type="checkbox" /> Запомнить
              меня
            </p>
            <div className="flex flex-col items-end underline">
              <NavLink to="/auth/login">
                <p>Есть аккаунт?</p>
                <p>Войдите</p>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
