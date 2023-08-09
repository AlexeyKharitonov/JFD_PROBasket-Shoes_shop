import React from "react";

const CardWrapper = ({ children }) => {
  return (
    // <div className="bg-[#F2F2F2]  rounded-3xl w-full p-0 flex flex-col items-center shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40">
    <div className="bg-[#F2F2F2]  rounded-3xl w-full p-0  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40">
      {children}
    </div>
  );
};

export default CardWrapper;
