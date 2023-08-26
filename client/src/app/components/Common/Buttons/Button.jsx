import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./button.scss";

const Button = ({
  children = "",
  type,
  size,
  handleClick,
  classes = "",
  useFlex = true,
}) => {
  const defaultBtnStyles = useFlex
    ? `flex items-center justify-center py-3 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl`
    : `py-3 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl`;

  const classBtn = classNames({
    btn: true,
    "btn-white": type === "white",
    "btn-primary": type === "primary",
    "btn-danger": type === "danger",
    "btn-gray": type === "gray",
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
Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  handleClick: PropTypes.func,
  classes: PropTypes.string,
  useFlex: PropTypes.bool,
};

export default Button;
