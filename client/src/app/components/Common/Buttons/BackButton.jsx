import { useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import { useOpacity } from "../../../Hooks/useOpacity";

const BackButton = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(-1, {});
  };

  const { opacity } = useOpacity();

  return (
    <div
      className="hidden customlg:block fixed top-28 z-50 backdrop-blur flex-none transition-colors"
      style={{ opacity }}
      // тут у меня ключ opacity и значение opacity совпадают
    >
      <button
        onClick={handleNavigate}
        className="px-4 bg-[#4361ee] text-white hover:bg-[#25499a] flex items-center p-2.5 font-bold rounded-3xl text-base transition duration-300 ease-in-out shadow-2xl"
      >
        <FiArrowLeftCircle className="mr-1.5" size={33} />
        Назад
      </button>
    </div>
  );
};

export default BackButton;
