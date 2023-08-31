import PropTypes from "prop-types";

const CardWrapper = ({ children, w = "w-full" }) => {
  return (
    <div
      className={`${w} bg-[#ECEBED] rounded-3xl mx-auto opacity-95 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.9)] shadow-indigo-900/40`}
    >
      {children}
    </div>
  );
};
CardWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  w: PropTypes.string,
};

export default CardWrapper;
