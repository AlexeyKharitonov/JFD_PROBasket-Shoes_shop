import React from "react";

const CardWrapper = ({ children }) => {
  const gradientStyle = {
    // background: "linear-gradient(to left,  #ece9e6, #ffffff)",
    background: "linear-gradient(to left,  #ece9e6, #ffffff)",
    // background: "-webkit-linear-gradient(to right, #ece9e6, #ffffff)",
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={
        ({
          backgroundColor: "#F5F6FD",
          // minHeight: "100vh",
        },
        gradientStyle)
      }
    >
      {children}
    </div>
  );
};

export default CardWrapper;
