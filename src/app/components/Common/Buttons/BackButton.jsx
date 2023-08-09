import React from "react";
import { useNavigate } from "react-router-dom";
// Icons
import { FiArrowLeftCircle } from "react-icons/fi";

const BackButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1, {});
  };

  return (
    <div className="fixed top-28 z-50  backdrop-blur flex-none transition-colors">
      <button
        onClick={handleNavigate}
        className="group bg-gradient-to-r px-4 from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-200  flex items-center p-3 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl"
      >
        <FiArrowLeftCircle className="mr-1" size={32} />
        Назад
      </button>
    </div>
  );
};

export default BackButton;
