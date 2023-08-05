import React from "react";

const MainWrapper = ({ children }) => {
  const gradientStyle = {
    background: "linear-gradient(to left,  #d1cfcd, #ffffff)",
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

export default MainWrapper;
