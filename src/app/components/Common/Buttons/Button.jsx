import React from "react";
import classNames from "classnames";
import "./button.scss";
const defaultBtnStyles =
  "py-3 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl";

const Button = ({ children = "", type, size, handleClick, classes = "" }) => {
  const classBtn = classNames({
    btn: true,
    "btn-white": type === "white",
    "btn-primary": type === "primary",
    "btn-danger": type === "danger",
    "btn-medium": size === "btnMedium",
  });
  return (
    <button
      className={`${defaultBtnStyles} ${classBtn} ${classes}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
