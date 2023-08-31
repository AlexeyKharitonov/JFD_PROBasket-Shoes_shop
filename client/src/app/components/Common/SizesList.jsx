import PropTypes from "prop-types";
const SizesList = ({ children, selected, onClick, sizeNotSelected }) => {
  const baseStyles =
    "flex rounded-xl mx-0.5 font-semibold justify-center text-sm mb-2.5 px-2.5 py-1 ";
  return (
    <button
      className={`${baseStyles} ${
        selected
          ? "text-white bg-gray-400"
          : "text-gray-500 bg-white hover:bg-slate-200 hover:scale-105"
      } ${sizeNotSelected ? "border-[1px] border-red-600  text-red-600" : " "}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
SizesList.propTypes = {
  children: PropTypes.node.isRequired,
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  sizeNotSelected: PropTypes.bool.isRequired,
};

export default SizesList;
