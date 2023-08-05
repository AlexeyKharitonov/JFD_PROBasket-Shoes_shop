import React from "react";

const NavBarWrapper = ({ children }) => {
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur flex-none transition-colors">
      {children}
    </div>
  );
};

export default NavBarWrapper;
