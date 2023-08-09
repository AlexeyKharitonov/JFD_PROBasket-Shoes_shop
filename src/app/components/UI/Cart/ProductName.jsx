import React from "react";
import { TiDeleteOutline } from "react-icons/ti";

const ProductName = ({ name, price, onDelete, id }) => {
  return (
    <div className="flex justify-between mb-4 items-center">
      <span className="w-[125px] truncate mr-4">{name}</span>{" "}
      <div className="flex items-center">
        <span className="text-center mr-4">{price} руб.</span>
        <button onClick={() => onDelete(id)}>
          <TiDeleteOutline size={35} color="#D96259" />
        </button>
      </div>
    </div>
  );
};

export default ProductName;
