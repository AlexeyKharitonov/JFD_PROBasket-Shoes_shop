import React from "react";

const CounterInCart = ({ count }) => {
  return (
    count > 0 && (
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#D96259] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
        {count}
      </div>
    )
  );
};

export default CounterInCart;
