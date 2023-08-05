import React from "react";
import { useNavigate } from "react-router-dom";
// Icons
// import { ChevronLeftIcon } from "@heroicons/react/solid";
import { TiArrowLeftThick } from "react-icons/ti";

const BackButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1, {});
  };

  return (
    <button
      onClick={handleNavigate}
      className="group flex font-semibold text-sm leading-6 text-slate-600 hover:text-slate-400 trans transition-all duration-200"
    >
      <TiArrowLeftThick className="h-6" size={55} />
      Назад
    </button>
  );
};

export default BackButton;
