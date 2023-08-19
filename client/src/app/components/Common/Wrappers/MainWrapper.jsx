import React from "react";

const MainWrapper = ({ children }) => {
  const gradientStyle = {
    // background: "linear-gradient(to left,  #d1cfcd, #ffffff)",
    background: "linear-gradient(to left,  #b3b1af, #ffffff)",
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={
        ({
          backgroundColor: "#F5F6FD",
          // flex: "1, 0, auto",
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
