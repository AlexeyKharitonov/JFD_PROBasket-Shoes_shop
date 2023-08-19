import React from "react";

const CardWrapper = ({ children }) => {
  return (
    <div className="bg-[#F2F2F2] rounded-3xl opacity-90 w-full   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40">
      {children}
    </div>
  );
};

export default CardWrapper;
