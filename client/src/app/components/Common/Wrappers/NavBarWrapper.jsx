import PropTypes from "prop-types";
const NavBarWrapper = ({ children }) => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors">
      {children}
    </div>
  );
};
NavBarWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBarWrapper;
