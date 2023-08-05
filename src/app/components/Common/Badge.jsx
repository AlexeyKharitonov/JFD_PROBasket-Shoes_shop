import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="px-4 py-2 rounded-full text-base text-gray-700 bg-gray-200 mx-0.5 mb-2">
      {children}
    </span>
  );
};

export default Badge;
