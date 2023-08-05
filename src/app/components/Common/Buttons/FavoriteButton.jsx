import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

const FavoriteButton = () => {
  return (
    <button className="">
      <AiOutlineStar
        size={55}
        className="text-[#FCCA3D] hover:text-yellow-600"
      />
    </button>
  );
};

export default FavoriteButton;
