import React, { useState } from "react";
import { SiNike, SiJordan, SiAdidas } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";

// import { BsSun } from "react-icons/bs";
// import { HiMoon } from "react-icons/hi2";
import NavBarWrapper from "../components/Common/Wrappers/NavBarWrapper";
import { Link, NavLink } from "react-router-dom";

export const AppBar = () => {
  const [activeButton, setactiveButton] = useState("login");

  const handleToggleButton = (buttonName) => {
    setactiveButton(buttonName);
  };

  // const getButtonBackGroundColor = (buttonName) => {
  //   return activeButton === buttonName
  //     ? "bg-white text-gray-900 px-4 py-2 rounded-full"
  //     : "text-white";
  // };

  return (
    // <nav className="p-1.5 rounded-b-xl bg-[#0155AB]">
    <NavBarWrapper>
      <nav className="p-1.5 bg-[#0f6fd1]">
        <div className="flex justify-between items-center text-base">
          <div className="flex items-center mx-5 text-gray-400">
            <div className="flex opacity-80">
              <SiNike size={33} className="mr-1 ml-1" />
              <SiJordan size={33} className="mr-1 ml-1 text-stone-700" />
              <SiAdidas size={33} className="mr-4 ml-1" />
            </div>
            <Link to="/">
              <div
                className="text-[#ffffff] ml-6 mr-1 text-4xl font-bold hover:text-gray-400"
                style={{
                  fontFamily: "Questrial",
                  fontStyle: "italic",
                  textDecoration: "underline ",
                }}
              >
                PROBasket-Shoes
              </div>
            </Link>
            {/* <Link to="/">
            <div
              className="ml-6 mr-1 text-4xl font-bold  hover:text-gray-400"
              style={{
                fontFamily: "Questrial",
                fontStyle: "italic",
                textDecoration: "underline",
                position: "relative",
                display: "block", // Измените на block
              }}
            >
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #be93c5, #7bc6cc)",
                  // WebkitBackgroundClip: "text",
                  // color: "transparent",
                  // filter: "url(#gradient-text)",
                }}
              >
                PROBasket-Shoes
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0"
                height="0"
                style={{ position: "absolute" }}
              >
                <defs>
                  <filter id="gradient-text">
                    <feFlood floodColor="transparent" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
              </svg>
            </div>
          </Link> */}
            <img
              width="66"
              height="66"
              src="https://img.icons8.com/cotton/64/basketball--v3.png"
              alt="basketball--v3"
            />
          </div>
          <span className="flex items-center text-base">
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
              to="/favorite"
              className="hover:text-gray-400 text-white font-medium mr-7"
            >
              <div className="flex items-center">
                <span>Избранное</span>
                <span>
                  <MdOutlineFavorite
                    size={35}
                    className="text-[#DB4439] hover:text-[#d96259]"
                  />
                </span>
              </div>
            </Link>
          </span>
          {/* <div>
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
        </div> */}

          {/* <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" checked />
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              <BsSun size={20} color="yellow" />
              <HiMoon size={20} color="#DAA520" />
            </span>
          </label> */}
          {/* <FaShoppingCart size={50} className="text-yellow-500" /> */}
          <span className="flex items-center text-base">
            <Link
              to="/auth/login"
              className="hover:text-gray-400 text-white font-medium mr-7"
            >
              Войти
            </Link>
            <Link
              to="/basket"
              className="hover:text-gray-400 text-white font-medium mr-7"
            >
              <div className="flex items-center">
                <span>Корзина</span>
                <span>
                  <IoMdCart
                    size={55}
                    className="text-[#FCCA3D] hover:text-yellow-600"
                  />
                </span>
              </div>
            </Link>
          </span>
          {/* <MdShoppingCart size={50} className="text-yellow-500" />
        <AiOutlineShoppingCart size={50} className="text-yellow-500" /> */}
        </div>
      </nav>
    </NavBarWrapper>
  );
};
