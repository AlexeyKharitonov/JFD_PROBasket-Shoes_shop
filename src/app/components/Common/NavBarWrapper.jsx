import React from "react";

const NavBarWrapper = ({ children }) => {
  return (
    <div className="relative     ">
      {/* <div className="py-4 px-4"> */}
      <div className="relative ">{children}</div>
      {/* </div> */}
    </div>
  );
};

export default NavBarWrapper;
