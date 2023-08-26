import PropTypes from "prop-types";
const MainWrapper = ({ children }) => {
  const gradientStyle = {
    // background: "linear-gradient(to left,  #d1cfcd, #ffffff)",
    // background: "linear-gradient(to left,  #b3b1af, #ffffff)",
    background: "linear-gradient(to left, #9e9c9a, #f0f0f0)",
  };
  return (
    <div
      className="flex flex-col min-h-screen"
      style={
        ({
          backgroundColor: "#F5F6FD",
        },
        gradientStyle)
      }
    >
      {children}
    </div>
  );
};
MainWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainWrapper;
