import PropTypes from "prop-types";
const Badge = ({ children }) => {
  return (
    <span className="px-4 py-2 rounded-full text-base text-gray-700 bg-gray-200 mx-0.5 mb-2">
      {children}
    </span>
  );
};
Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
