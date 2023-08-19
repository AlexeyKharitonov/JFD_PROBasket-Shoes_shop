import React from "react";

const SizesList = ({ children, selected, onClick, sizeNotSelected }) => {
  const baseStyles =
    "flex rounded-xl mx-0.5 font-semibold justify-center text-sm mb-2.5 px-2.5 py-1 ";
  // const defaultStyle = "text-white bg-gray-500";
  // const selectedStyle = "text-gray-500 bg-white";
  const defaultStyle = "text-gray-500 bg-white";
  const selectedStyle = "text-white bg-gray-500";

  return (
    <button
      className={`${baseStyles} ${selected ? selectedStyle : defaultStyle} ${
        sizeNotSelected ? "border-[1px] border-red-600  " : " "
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SizesList;
