import React, { useState } from "react";
import { SiNike, SiJordan, SiAdidas } from "react-icons/si";
// import { BsSun } from "react-icons/bs";
import { HiMoon } from "react-icons/hi2";
import NavBarWrapper from "../components/Common/NavBarWrapper";
import { Link, NavLink } from "react-router-dom";

export const AppBar = () => {
  const [activeButton, setactiveButton] = useState("login");

  const handleToggleButton = (buttonName) => {
    setactiveButton(buttonName);
  };

  const getButtonBackGroundColor = (buttonName) => {
    return activeButton === buttonName
      ? "bg-white text-gray-900 px-4 py-2 rounded-full"
      : "text-white";
  };

  return (
    <nav className="p-2 rounded-b-xl" style={{ backgroundColor: "#0155AB" }}>
      <div className="flex justify-between items-center text-base ">
        <div className="flex items-center mx-5 text-gray-400">
          <div className="flex opacity-80">
            <SiNike size={37} className="mr-1 ml-1" />
            <SiJordan size={37} className="mr-1 ml-1 text-stone-700" />
            <SiAdidas size={37} className="mr-4 ml-1" />
          </div>
          <Link to="/">
            <div
              className="text-white ml-6 mr-1 text-4xl font-bold hover:text-gray-400"
              style={{
                fontFamily: "Questrial",
                fontStyle: "italic",
                textDecoration: "underline ",
              }}
            >
              PROBasket-Shoes
            </div>
          </Link>
          <img
            width="64"
            height="64"
            src="https://img.icons8.com/cotton/64/basketball--v3.png"
            alt="basketball--v3"
          />
        </div>
        <div>
          <Link
            to="/"
            className="hover:text-gray-400 text-white font-medium mr-7"
          >
            Главная
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-400 text-white font-medium mr-7"
          >
            О магазине
          </Link>
          <Link
            to="/contacts"
            className="hover:text-gray-400 text-white font-medium mr-7"
          >
            Контакты
          </Link>
        </div>
        <div>
          <NavLink
            to="/login"
            className={`font-medium mr-4  ${getButtonBackGroundColor("login")}`}
            onClick={() => handleToggleButton("login")}
          >
            Авторизоваться
          </NavLink>
          <NavLink
            to="/"
            className={`font-medium mr-4 ${getButtonBackGroundColor(
              "register"
            )}`}
            onClick={() => handleToggleButton("register")}
          >
            Зарегистрироваться
          </NavLink>
        </div>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            {/* <input type="checkbox" value="" className="sr-only peer" checked /> */}
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {/* <BsSun size={20} color="yellow" /> */}
              <HiMoon size={20} color="#DAA520" />
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};
