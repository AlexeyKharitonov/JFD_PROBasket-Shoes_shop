import React from "react";

const Button = ({ children, classes = "" }) => {
  return (
    <button
      className={
        " py-3 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl " +
        classes
      }
    >
      {children}
    </button>
  );
};

export default Button;
