import React from "react";
// import { toast } from "react-toastify";

const SizesList = ({ children, selected, onClick, sizeNotSelected }) => {
  const baseStyles =
    "flex rounded-xl mx-0.5 font-semibold justify-center text-sm mb-2.5 px-2.5 py-1 ";

  // const defaultStyle = "text-gray-500 bg-white";
  // const selectedStyle = "text-white bg-gray-500";
  // if (!selected) {
  //   toast.error("Пожалуйста, выберете размер", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // }

  return (
    <button
      className={`${baseStyles} ${
        selected
          ? "text-white bg-gray-500"
          : "text-gray-500 bg-white hover:bg-slate-400"
      } ${sizeNotSelected ? "border-[1px] border-red-600  text-red-600" : " "}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SizesList;
