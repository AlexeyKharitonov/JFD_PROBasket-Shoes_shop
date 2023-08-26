import PropTypes, { number } from "prop-types";
import { FaStar, FaStarHalf } from "react-icons/fa";

const StarsRate = ({ children }) => {
  const newChildren = Math.floor(children);
  const halfChildren = children % 1 !== 0;
  const arr = [...Array(newChildren)].map((_, i) => i + 1);

  return (
    <>
      {arr.map((el, index) => (
        <FaStar key={index} color="#C78B0E" size={25} className="mx-0.5" />
      ))}
      {halfChildren && <FaStarHalf color="#C78B0E" size={25} />}
    </>
  );
};
StarsRate.propTypes = {
  children: PropTypes.number.isRequired,
};

export default StarsRate;
